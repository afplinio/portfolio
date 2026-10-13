import { FaGithub } from 'react-icons/fa'
import { projetos } from '../data/projetos'
import './Projetos.css'

function Projetos({ t, lang }) {
  const ordenados = [...projetos].sort((a, b) => a.ano - b.ano)

  return (
    <section id="projetos" className="projetos">
      <h2>{t.titulo}</h2>
      <p>{t.subtitulo}</p>

      <ol className="projetos__timeline">
        {ordenados.map((projeto) => (
          <li key={projeto.id} className="projetos__item">
            <span className="projetos__ano">{projeto.ano}</span>

            <div className="projetos__card">
              {projeto.imagem ? (
                <img
                  className="projetos__imagem"
                  src={projeto.imagem}
                  alt={projeto.nome}
                />
              ) : (
                <div className="projetos__sem-imagem">{t.semImagem}</div>
              )}

              <div>
                <h3>{projeto.nome}</h3>
                <p>{projeto.descricao[lang]}</p>

                <ul className="projetos__tags">
                  {projeto.tecnologias.map((tec) => (
                    <li key={tec}>{tec}</li>
                  ))}
                </ul>

                <a
                  className="projetos__github"
                  href={projeto.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> {t.verGithub}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Projetos