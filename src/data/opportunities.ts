export interface Opportunity {
  id: string;
  title: string;
  institution: string;
  country: string;
  level: 'Pregrado' | 'Maestría' | 'Doctorado';
  area: string;
  type: 'Beca' | 'Intercambio' | 'Programa' | 'Curso corto';
  deadline: string;
  description: string;
  link: string;
}

export const opportunities: Opportunity[] = [
  {
    id: 'o1',
    title: 'Beca de investigación en física experimental',
    institution: 'Universidad Nacional de Colombia',
    country: 'Colombia',
    level: 'Pregrado',
    area: 'Física',
    type: 'Beca',
    deadline: '30 de junio de 2026',
    description:
      'Apoyo económico para estudiantes de pregrado que deseen vincularse a semilleros de investigación en física de materiales y óptica en laboratorio.',
    link: '#'
  },
];