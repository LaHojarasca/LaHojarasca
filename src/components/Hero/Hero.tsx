import { Link } from 'react-router-dom';
import heroIllustration from '../../assets/images/hero-illustration.svg';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__content">
        <div className="hero__text">
          <p className="hero__eyebrow">La física en Colombia necesita más conversaciones</p>
          <h1 className="hero__title">La Hojarasca</h1>
          <h2 className="hero__subtitle">Construyendo un lugar de ciencia y física para nuestro amado país</h2>
          <p className="hero__description">
            Somos dos apasionados por la física y la ciencia que decidieron crear el espacio que siempre quisieron encontrar en Colombia: 
            un lugar para aprender, debatir y compartir ideas sobre cómo funciona el mundo. Nacimos con el firme propósito de llenar el 
            vacío de referentes digitales de física en nuestro país y ayudar a cambiar esa realidad.
          </p>
          <div className="hero__actions">
            <Link to="/blog" className="btn btn--primary">
              Explorar Blog
            </Link>
            <Link to="/ensenanza" className="btn btn--outline">
              Ver Cursos
            </Link>
          </div>
        </div>
        <div className="hero__image-wrapper">
          <img
            src={heroIllustration}
            alt="Ilustración de naturaleza y ciencia"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;