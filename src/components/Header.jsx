import './Header.css'

function Header() {
  return (
    <header className="header">
      <span className="header__logo">Plínio Ângelo Ferreira</span>
      <nav className="header__nav">
        <a href="#sobre">Sobre Mim</a>
        <a href="#projetos">Projetos</a>
        <a href="#experiencias">Experiências</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  )
}

export default Header