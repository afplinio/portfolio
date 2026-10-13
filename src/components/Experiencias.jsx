import { FaGraduationCap } from 'react-icons/fa'
import { experiencias } from '../data/experiencias'
import './Experiencias.css'

function Experiencias({ t, lang }) {
  const ordenadas = [...experiencias].sort((a, b) =>
    b.inicio.localeCompare(a.inicio),
  )

  return (
    <section id="experiencias" className="experiencias">
      <h2>{t.titulo}</h2>
      <p>{t.subtitulo}</p>

      <div className="experiencias__lista">
        {ordenadas.map((exp) => (
          <article key={exp.id} className="experiencias__card">
            <FaGraduationCap className="experiencias__icone" size={32} />
            <div>
              <div className="experiencias__topo">
                <h3>{exp.cargo[lang]}</h3>
                <span className="experiencias__periodo">
                  {exp.periodo[lang]}
                </span>
              </div>
              <p className="experiencias__instituicao">{exp.instituicao}</p>
              <p>{exp.descricao[lang]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experiencias