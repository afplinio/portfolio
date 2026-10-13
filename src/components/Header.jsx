import { FaSun, FaMoon } from 'react-icons/fa'
import './Header.css'

function Header({ t, lang, onToggleLang, tema, onToggleTema }) {
  return (
    <header className="header">
      <span className="header__logo">Plínio Ângelo Ferreira</span>
      <nav className="header__nav">
        <a href="#sobre">{t.menu.sobre}</a>
        <a href="#projetos">{t.menu.projetos}</a>
        <a href="#experiencias">{t.menu.experiencias}</a>
        <a href="#contato">{t.menu.contato}</a>
        <button className="header__lang" onClick={onToggleLang}>
          <span className={lang === 'pt' ? 'ativo' : ''}>PT</span>
          {' | '}
          <span className={lang === 'en' ? 'ativo' : ''}>EN</span>
        </button>
        <button
          className="header__tema"
          onClick={onToggleTema}
          aria-label={t.alternarTema}
          title={t.alternarTema}
        >
          {tema === 'claro' ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
    </header>
  )
}

export default Header