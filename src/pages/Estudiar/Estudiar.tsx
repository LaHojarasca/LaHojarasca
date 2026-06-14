import { useMemo, useState } from 'react';
import OpportunityCard from '../../components/OpportunityCard/OpportunityCard';
import { opportunities } from '../../data/opportunities';

const LEVELS = ['Todos', 'Pregrado', 'Maestría', 'Doctorado'] as const;
const TYPES = ['Todos', 'Beca', 'Intercambio', 'Programa', 'Curso corto'] as const;

type LevelFilter = (typeof LEVELS)[number];
type TypeFilter = (typeof TYPES)[number];

function uniqueValues(values: string[]): string[] {
  return Array.from(new Set(values));
}

function Estudiar() {
  const [levelFilter, setLevelFilter] = useState<LevelFilter>('Todos');
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('Todos');
  const [countryFilter, setCountryFilter] = useState<string>('Todos');
  const [areaFilter, setAreaFilter] = useState<string>('Todos');

  const countries = useMemo(
    () => ['Todos', ...uniqueValues(opportunities.map((o) => o.country))],
    []
  );
  const areas = useMemo(() => ['Todos', ...uniqueValues(opportunities.map((o) => o.area))], []);

  const filteredOpportunities = opportunities.filter((opportunity) => {
    const matchesLevel = levelFilter === 'Todos' || opportunity.level === levelFilter;
    const matchesType = typeFilter === 'Todos' || opportunity.type === typeFilter;
    const matchesCountry = countryFilter === 'Todos' || opportunity.country === countryFilter;
    const matchesArea = areaFilter === 'Todos' || opportunity.area === areaFilter;

    return matchesLevel && matchesType && matchesCountry && matchesArea;
  });

  return (
    <div className="page page--opportunities">
      <section className="section section--top">
        <div className="container">
          <div className="section__header">
            <h1 className="page-title">Estudiar</h1>
            <p className="section__subtitle">
              Un portal de oportunidades académicas en física y ciencias para estudiantes y
              docentes: becas, intercambios, programas y más.
            </p>
          </div>

          <div className="filters filters--grid">
            <div className="filters__group">
              <label htmlFor="level" className="filters__label">
                Nivel académico
              </label>
              <select
                id="level"
                className="filters__select"
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value as LevelFilter)}
              >
                {LEVELS.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div className="filters__group">
              <label htmlFor="type" className="filters__label">
                Tipo de oportunidad
              </label>
              <select
                id="type"
                className="filters__select"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as TypeFilter)}
              >
                {TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="filters__group">
              <label htmlFor="country" className="filters__label">
                País
              </label>
              <select
                id="country"
                className="filters__select"
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="filters__group">
              <label htmlFor="area" className="filters__label">
                Área
              </label>
              <select
                id="area"
                className="filters__select"
                value={areaFilter}
                onChange={(e) => setAreaFilter(e.target.value)}
              >
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="section__grid section__grid--two">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                title={opportunity.title}
                institution={opportunity.institution}
                country={opportunity.country}
                level={opportunity.level}
                area={opportunity.area}
                type={opportunity.type}
                deadline={opportunity.deadline}
                description={opportunity.description}
                link={opportunity.link}
              />
            ))}
            {filteredOpportunities.length === 0 && (
              <p className="page-text">
                No encontramos oportunidades con los filtros actuales. Intenta ajustar los
                criterios.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Estudiar;