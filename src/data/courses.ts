import coursePhysicsImage from '../assets/images/course-physics.svg';
import courseMathImage from '../assets/images/course-math.svg';
import courseAstronomyImage from '../assets/images/course-astronomy.svg';
import courseScienceImage from '../assets/images/course-science.svg';

export interface Course {
  id: string;
  title: string;
  category: 'Física' | 'Matemáticas' | 'Astronomía' | 'Ciencia General';
  level: 'Secundaria' | 'Universidad' | 'Formación docente';
  description: string;
  image: string;
}

export const courses: Course[] = [
  {
    id: 'c1',
    title: 'Física desde la hojarasca: introducción contextualizada',
    category: 'Física',
    level: 'Secundaria',
    description:
      'Secuencia de actividades para introducir conceptos de fuerza, energía y materia a partir de caminatas, observaciones y experiencias en entornos naturales locales.',
    image: coursePhysicsImage
  },
];