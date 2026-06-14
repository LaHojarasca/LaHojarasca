import blogPhysicsImage from '../assets/images/blog-physics.svg';
import blogAstronomyImage from '../assets/images/blog-astronomy.svg';
import blogEducationImage from '../assets/images/blog-education.svg';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'La física de la hojarasca: del caos aparente al orden oculto',
    category: 'Física',
    date: '12 de marzo de 2026',
    author: 'Laura Martínez',
    excerpt:
      'Un paseo por los bosques andinos para descubrir cómo conceptos como entropía, fuerzas y energía aparecen en algo tan cotidiano como una capa de hojas secas.',
    image: blogPhysicsImage,
    content:
      'Cuando caminamos sobre un tapete de hojas secas, sentimos crujidos, irregularidades y pequeñas inestabilidades en cada paso.\n\n' +
      'Desde la física, ese paisaje aparentemente caótico puede leerse como un sistema complejo donde intervienen fuerzas de contacto, fricción, humedad, gradientes de temperatura y procesos de descomposición biológica. Cada hoja es el registro material de procesos microscópicos (cambios celulares, transporte de nutrientes, intercambio de energía con la radiación solar) y macroscópicos (el ciclo del agua, el viento, las estaciones).\n\n' +
      'La entropía, entendida como medida de desorden (o, más rigurosamente, de número de configuraciones posibles), aumenta cuando las hojas caen y se reacomodan de mil maneras posibles sobre el suelo. Sin embargo, ese “desorden” permite nuevas formas de vida: semillas que encuentran refugio, insectos que construyen madrigueras, hongos que despliegan redes subterráneas. De este modo, el aumento de entropía en un nivel habilita estructuras más organizadas en otro.\n\n' +
      'Llevar estas metáforas a la clase de física puede ser una forma poderosa de conectar la termodinámica con la ecología, invitando al estudiantado a mirar el entorno local como un laboratorio vivo, donde cada caminata por el bosque se convierte en una oportunidad de observación y modelamiento.'
  },
];