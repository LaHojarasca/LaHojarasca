import heroIllustration from '../../assets/images/hero-illustration.svg';
import fotoJSAC from '../../assets/images/JSAC.jpg';
import fotoJMDQ from '../../assets/images/JMDQ.jpg';

function Nosotros() {
  return (
    <div className="page page--about">
      <section className="section section--top">
        <div className="container">
          <div className="section__header section__header--center">
            <h1 className="page-title">Nosotros</h1>
              <p className="bio__text">
                Detrás de La Hojarasca hay una coincidencia que casi parece un error en la matriz: ambos nos llamamos Juan, 
                nacimos en 2003 en Medellín y nos graduamos como ingenieros físicos de la Universidad EAFIT. Por si fuera poco, 
                el destino (o la física) nos trajo a la Universidad de Purdue, donde actualmente ambos cursamos el doctorado en Física. 
                Compartimos tanto la trayectoria que en muchos escenarios bromeamos con que, básicamente, somos la misma persona. 
                Pero más allá de los datos en el papel, compartimos una visión profunda: somos personas políticas, convencidas del 
                poder transformador que la ciencia y la educación tienen sobre la sociedad. Por eso creamos este espacio, como una 
                herramienta activa para democratizar el conocimiento y construir desde nuestra propia realidad.
              </p>
          </div>

          <div className="bio bio--reverse">
            <div className="bio__image-wrapper">
              <img
                src={fotoJMDQ}
                alt="Retrato Persona 1"
                className="bio__image"
              />
            </div>
            <div className="bio__content">
              <h2 className="bio__name">Juan Manuel Duarte Quiros</h2>
              <p className="bio__role">Física de Altas Energías · COO</p>
              <p className="bio__text">
                Yo soy Juan (El Juan), Nací y crecí en el barrio Buenos Aires, siempre impulsado por una gran pasión por las matemáticas y un 
                deseo constante de entender el universo. Gracias a la beca "Generación E" del Icetex y el Gobierno Nacional, tuve la 
                oportunidad de realizar mis estudios profesionales en la Universidad EAFIT.<br />
                
                Aunque inicié mi camino en el área de la física teórica de altas energías, hoy en día formo parte de la colaboración 
                CMS en el CERN, trabajando en el grupo del profesor Andreas Jung. Actualmente, mi investigación se centra en la 
                física del quark top, y en el futuro planeo orientar mi trabajo hacia el estudio del bosón de Higgs a través 
                de sus interacciones con el quark top.
              </p>
              <p className="bio__text">
                En La Hojarasca juego como el COO, pero la verdad es que me tocó acomodarme ese título porque el Sebas se pidió el de CEO 
                primero para tirar visaje. Lo mío es más filosofar, indagar, escribir y meterme en lo abstracto. Básicamente, mi rol principal 
                es ser el que le dice al Sebas: "Eso no es verdad", porque en esta dupla alguien tiene que joder la vida.<br />

                Ya en la práctica, leo papers, escribo en el blog, grabo videos con el Sebas y ya, parchar en el fermilab.
              </p>
            </div>
          </div>

          <div className="bio">
            <div className="bio__image-wrapper">
              <img
                src={fotoJSAC}
                alt="Retrato Persona 2"
                className="bio__image"
              />
            </div>
            <div className="bio__content">
              <h2 className="bio__name">Juan Sebastian Aguiar Castrillon</h2>
              <p className="bio__role">Biofísica  · CEO</p>
              <p className="bio__text">
                Las personas suelen llamarme Sebastian. Nací y crecí en el barrio Aranjuez, siempre con una inmensa curiosidad 
                por entender cómo funciona el mundo y un profundo amor por las matemáticas. Gracias a la beca "Mejores Bachilleres" 
                de Sapiencia y la Alcaldía de Medellín, tuve la oportunidad de estudiar en EAFIT, al mismo tiempo que cursaba Ingeniería 
                Química en la Universidad Nacional de Colombia. <br />

                Actualmente, soy miembro del laboratorio del profesor Jing Liu, donde mi investigación se enfoca en el 
                sensado cuántico con centros de vacancia de nitrógeno (NV) en diamante, vinculando los cambios en los estados 
                cuánticos con variables biológicas como la temperatura, el pH y la concentración de iones.
              </p>
              <p className="bio__text">
                Ya en la práctica, lo mío es pura pedagogía y divulgación. Me toca meterle la mano a la edición de los videos
                porque el Juanma no le sabe a eso, además de escribir y cranearme las notas de los cursos que algún 
                día quiero dictar. Soy el financiero designado entonces si algun dia recogemos platica pa patrocinar actividades, segurametne yo estare encargado de eso.
                <br />
                Tambien soy el polo a tierra de esta duo por que el juanma a veces sale con unas cosas...Y bueno, paramos ahí porque el tiempo no da pa más.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;