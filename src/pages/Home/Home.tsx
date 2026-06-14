import Hero from '../../components/Hero/Hero';

function Home() {
  return (
    <div className="page page--home">
      <Hero />

      <section className="section section--light">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">¿Qué es La Hojarasca?</h2>
            <p className="section__subtitle">
              En el folclore colombiano existe la leyenda del Hojarasquero, un guardián de los bosques que cuida aquello que crece 
              lejos de la vista de la mayoría.<br /><br />

              Para nosotros, la hojarasca representa las ideas, las preguntas y el conocimiento que se acumulan y dan vida al 
              bosque de la ciencia. Queremos ser esos hojarasqueros del conocimiento: explorar, cuidar y compartir las ideas que nacen 
              en la física, la ciencia y la educación colombiana.
            </p>
          </div>
          <div className="section__grid section__grid--two">
            <div className="card card--info">
              <h3 className="card__title">¿Por qué existimos?</h3>
              <p className="card__text">
                La física tiene pocos espacios digitales de referencia en Colombia. 
                La Hojarasca nace para ayudar a llenar ese vacío, creando un lugar donde la ciencia pueda discutirse, 
                aprenderse y compartirse desde nuestra propia realidad.
              </p>
            </div>
            <div className="card card--info">
              <h3 className="card__title">Los Hojarasqueros</h3>
              <p className="card__text">
                Los hojarasqueros son quienes hacen crecer este bosque de ideas: estudiantes, docentes, investigadores y personas 
                curiosas que creen que la ciencia merece un lugar más visible en Colombia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section__header section__header--center">
            <h2 className="section__title">Lo que hacemos</h2>
            <p className="bio__text">
              En La Hojarasca nos movemos bajo tres propósitos iniciales: divulgar, enseñar y conectar a la comunidad de física en Colombia.
            </p>
          </div>
          <div className="section__grid section__grid--three">
            <div className="card card--service">
              <h3 className="card__title">Divulgación científica</h3>
              <p className="card__text">
                Publicamos artículos, ensayos y crónicas sobre física contemporánea, escritos en un lenguaje claro pero con rigor académico.
              </p>
            </div>
            <div className="card card--service">
              <h3 className="card__title">Recursos educativos</h3>
              <p className="card__text">
                Creamos notas de clase y material teórico-práctico diseñado para facilitar el aprendizaje y dominar los conceptos clave de la física.
              </p>
            </div>
            <div className="card card--service">
              <h3 className="card__title">Oportunidades académicas</h3>
              <p className="card__text">
                Creamos lectures, notas de clase y material teórico-práctico diseñado para facilitar el aprendizaje y dominar los conceptos clave de la física.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;