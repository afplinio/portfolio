import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { translations } from './data/translations'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
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
        <section id="experiencias">
          <h2>{t.header.menu.experiencias}</h2>
        </section>
        <Contato t={t.contato} />
      </main>
      <Footer t={t.footer} />
    </>
  )
}

export default App