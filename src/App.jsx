import { useState } from 'react'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Experiencias from './components/Experiencias'
import Contato from './components/Contato'
import Footer from './components/Footer'
import { translations } from './data/translations'

function App() {
  const [lang, setLang] = useState('pt')
  const [tema, setTema] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'claro',
  )
  const t = translations[lang]

  function alternarIdioma() {
    setLang(lang === 'pt' ? 'en' : 'pt')
  }

  function alternarTema() {
    const novoTema = tema === 'claro' ? 'escuro' : 'claro'
    setTema(novoTema)
    document.documentElement.setAttribute('data-theme', novoTema)
    localStorage.setItem('tema', novoTema)
  }

  return (
    <>
      <Header
        t={t.header}
        lang={lang}
        onToggleLang={alternarIdioma}
        tema={tema}
        onToggleTema={alternarTema}
      />
      <main>
        <Sobre t={t.sobre} />
        <Projetos t={t.projetos} lang={lang} />
        <Experiencias t={t.experiencias} lang={lang} />
        <Contato t={t.contato} />
      </main>
      <Footer t={t.footer} />
    </>
  )
}

export default App