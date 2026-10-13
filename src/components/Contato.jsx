import { useState } from 'react'
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Contato.css'
import emailjs from '@emailjs/browser'

const links = [
  {
    chave: 'email',
    icone: FaEnvelope,
    texto: 'plinioferreira2112@gmail.com',
    href: 'mailto:plinioferreira2112@gmail.com',
  },
  {
    chave: 'whatsapp',
    icone: FaWhatsapp,
    texto: '(31) 98966-0706',
    href: 'https://wa.me/5531989660706',
  },
  {
    chave: 'linkedin',
    icone: FaLinkedin,
    texto: 'LinkedIn',
    href: 'https://www.linkedin.com/in/plinioangeloferreira',
  },
  {
    chave: 'github',
    icone: FaGithub,
    texto: 'github.com/afplinio',
    href: 'https://github.com/afplinio',
  },
]

const formVazio = { nome: '', email: '', mensagem: '' }

function Contato({ t }) {
  const [form, setForm] = useState(formVazio)
  const [erros, setErros] = useState({})
  const [status, setStatus] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function validar() {
    const novosErros = {}
    if (!form.nome.trim()) novosErros.nome = 'erroNome'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) novosErros.email = 'erroEmail'
    if (form.mensagem.trim().length < 10) novosErros.mensagem = 'erroMensagem'
    return novosErros
  }

    async function handleSubmit(e) {
    e.preventDefault()
    const novosErros = validar()
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) return

    setStatus('enviando')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.nome,
          email: form.email,
          message: form.mensagem,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('sucesso')
      setForm(formVazio)
    } catch (erro) {
      console.error(erro)
      setStatus('falha')
    }
  }

  return (
    <section id="contato" className="contato">
      <h2>{t.titulo}</h2>
      <p>{t.subtitulo}</p>

      <div className="contato__links">
        {links.map(({ chave, icone: Icone, texto, href }) => (
          <a
            key={chave}
            className="contato__link"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <Icone size={28} />
            <strong>{t[chave]}</strong>
            <span>{texto}</span>
          </a>
        ))}
      </div>

      <form className="contato__form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="nome">{t.nome}</label>
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder={t.nomePlaceholder}
          value={form.nome}
          onChange={handleChange}
        />
        {erros.nome && <span className="contato__erro">{t[erros.nome]}</span>}

        <label htmlFor="email">{t.email}</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={t.emailPlaceholder}
          value={form.email}
          onChange={handleChange}
        />
        {erros.email && <span className="contato__erro">{t[erros.email]}</span>}

        <label htmlFor="mensagem">{t.mensagem}</label>
        <textarea
          id="mensagem"
          name="mensagem"
          placeholder={t.mensagemPlaceholder}
          value={form.mensagem}
          onChange={handleChange}
        />
        {erros.mensagem && (
          <span className="contato__erro">{t[erros.mensagem]}</span>
        )}

        <button type="submit" disabled={status === 'enviando'}>
          {status === 'enviando' ? t.enviando : t.enviar}
        </button>

        {status === 'sucesso' && <p className="contato__sucesso">{t.sucesso}</p>}
        {status === 'falha' && <p className="contato__falha">{t.falha}</p>}
      </form>
    </section>
  )
}

export default Contato