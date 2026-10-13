import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { translations } from './data/translations'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Experiencias from './components/Experiencias'
import Contato from './components/Contato'

function App() {
  const [lang, setLang] = useState('pt')
  const t = translations[lang]

  function alternarIdioma() {
    setLang(lang === 'pt' ? 'en' : 'pt')
  }

  return (
    <>
      <Header t={t.header} lang={lang} onToggleLang={alternarIdioma} />
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