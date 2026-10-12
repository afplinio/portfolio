import './Footer.css'

function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {ano} Plínio Ângelo Ferreira. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer