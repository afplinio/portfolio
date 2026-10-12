import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { translations } from './data/translations'

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
        <section id="sobre">
          <h2>{t.header.menu.sobre}</h2>
        </section>
        <section id="projetos">
          <h2>{t.header.menu.projetos}</h2>
        </section>
        <section id="experiencias">
          <h2>{t.header.menu.experiencias}</h2>
        </section>
        <section id="contato">
          <h2>{t.header.menu.contato}</h2>
        </section>
      </main>
      <Footer t={t.footer} />
    </>
  )
}

export default App