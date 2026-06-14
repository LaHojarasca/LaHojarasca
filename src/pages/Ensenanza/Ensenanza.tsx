import { useState } from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import { courses } from '../../data/courses';

const FILTERS = ['Todas', 'Física', 'Matemáticas', 'Astronomía', 'Ciencia General'] as const;

type CourseFilter = (typeof FILTERS)[number];

function Ensenanza() {
  const [activeFilter, setActiveFilter] = useState<CourseFilter>('Todas');

  const filteredCourses =
    activeFilter === 'Todas'
      ? courses
      : courses.filter((course) => course.category === activeFilter);

  return (
    <div className="page page--courses">
      <section className="section section--top">
        <div className="container">
          <div className="section__header">
            <h1 className="page-title">Enseñanza</h1>
            <p className="section__subtitle">
              Cursos y secuencias de aprendizaje diseñadas para fortalecer la enseñanza de la física
              y las ciencias en diferentes niveles educativos.
            </p>
          </div>

          <div className="filters filters--pill">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-pill ${
                  activeFilter === filter ? 'filter-pill--active' : ''
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="section__grid section__grid--three">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                category={course.category}
                level={course.level}
                description={course.description}
                image={course.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ensenanza;