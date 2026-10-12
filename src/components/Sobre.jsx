import './Sobre.css'
import foto from '../assets/foto.jpg'
import { tecnologias } from '../data/tecnologias'

function Sobre({ t }) {
  return (
    <section id="sobre" className="sobre">
      <h2>{t.titulo}</h2>

      <div className="sobre__perfil">
        <img className="sobre__foto" src={foto} alt={t.nome} />
        <div className="sobre__texto">
          <h3>{t.nome}</h3>
          <p className="sobre__cargo">{t.cargo}</p>
          <p>{t.apresentacao}</p>
        </div>
      </div>

      <div className="sobre__cards">
        <div className="sobre__card">
          <h4>{t.formacaoTitulo}</h4>
          <p>{t.formacaoCurso}</p>
          <p>{t.formacaoInstituicao}</p>
          <p>{t.formacaoPeriodo}</p>
        </div>

        <div className="sobre__card">
          <h4>{t.interessesTitulo}</h4>
          <ul>
            {t.interesses.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="sobre__card">
          <h4>{t.objetivosTitulo}</h4>
          <p>{t.objetivos}</p>
        </div>
      </div>

      <h4>{t.tecnologiasTitulo}</h4>
      <ul className="sobre__tags">
        {tecnologias.map((tec) => (
          <li key={tec}>{tec}</li>
        ))}
      </ul>
    </section>
  )
}

export default Sobre