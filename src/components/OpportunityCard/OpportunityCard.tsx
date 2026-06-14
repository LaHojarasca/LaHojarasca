export interface OpportunityCardProps {
  title: string;
  institution: string;
  country: string;
  level: string;
  area: string;
  type: string;
  deadline: string;
  description: string;
  link: string;
}

function OpportunityCard({
  title,
  institution,
  country,
  level,
  area,
  type,
  deadline,
  description,
  link
}: OpportunityCardProps) {
  return (
    <article className="card card--opportunity">
      <div className="card__body">
        <div className="card__meta card__meta--wrap">
          <span className="badge badge--category">{area}</span>
          <span className="badge badge--neutral">{country}</span>
          <span className="badge badge--level">{type}</span>
        </div>
        <h3 className="card__title">{title}</h3>
        <p className="card__subtitle">
          {institution} · {level}
        </p>
        <p className="card__text">{description}</p>
      </div>
      <div className="card__footer card__footer--space-between">
        <span className="card__deadline">Fecha límite: {deadline}</span>
        <a href={link} target="_blank" rel="noreferrer" className="btn btn--ghost">
          Más información
        </a>
      </div>
    </article>
  );
}

export default OpportunityCard;