import './Footer.css'

function Footer({ t }) {
  const ano = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {ano} Plínio Ângelo Ferreira. {t.direitos}</p>
    </footer>
  )
}

export default Footer