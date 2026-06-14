import xIcon from '../../assets/icons/icon-x.svg';
import instagramIcon from '../../assets/icons/icon-instagram.svg';
import linkedinIcon from '../../assets/icons/icon-linkedin.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__column">
          <h3 className="footer__title">La Hojarasca</h3>
          <p className="footer__text">
            Estamos construyendo uno de los pocos espacios <br />digitales dedicados a la física en Colombia.<br />
            Si te apasiona la ciencia, este también es tu lugar.
          </p>
        </div>

        <div className="footer__column">
          <h4 className="footer__subtitle">Navegación</h4>
          <ul className="footer__list">
            <li>
              <a href="/" className="footer__link">
                Inicio
              </a>
            </li>
            <li>
              <a href="/nosotros" className="footer__link">
                Nosotros
              </a>
            </li>
            <li>
              <a href="/blog" className="footer__link">
                Blog
              </a>
            </li>
            <li>
              <a href="/ensenanza" className="footer__link">
                Enseñanza
              </a>
            </li>
            <li>
              <a href="/estudiar" className="footer__link">
                Estudiar
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__subtitle">Contacto</h4>
          <p className="footer__text">
            Escríbenos para colaboraciones, talleres, asesorías o para compartir oportunidades
            académicas.
          </p>
          <p className="footer__text">
            <a href="mailto:hojarasca37649@gmail.com" className="footer__link">
              hojarasca37649@gmail.com
            </a>
          </p>
          <div className="footer__social">
            <a
              href="#"
              aria-label="Perfil de La Hojarasca en X"
              className="footer__social-link"
            >
              <img src={xIcon} alt="X" className="footer__social-icon" />
            </a>
            <a
              href="#"
              aria-label="Perfil de La Hojarasca en Instagram"
              className="footer__social-link"
            >
              <img src={instagramIcon} alt="Instagram" className="footer__social-icon" />
            </a>
            <a
              href="#"
              aria-label="Perfil de La Hojarasca en LinkedIn"
              className="footer__social-link"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="footer__social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-content">
          <span className="footer__copy">
            © {new Date().getFullYear()} La Hojarasca. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;