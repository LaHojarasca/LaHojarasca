export interface CourseCardProps {
  title: string;
  category: string;
  level: string;
  description: string;
  image: string;
}

function CourseCard({ title, category, level, description, image }: CourseCardProps) {
  return (
    <article className="card card--course">
      <div className="card__image-wrapper">
        <img src={image} alt={title} className="card__image" />
      </div>
      <div className="card__body">
        <div className="card__meta">
          <span className="badge badge--category">{category}</span>
          <span className="badge badge--level">{level}</span>
        </div>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{description}</p>
      </div>
      <div className="card__footer card__footer--right">
        <button type="button" className="btn btn--ghost">
          Ver curso
        </button>
      </div>
    </article>
  );
}

export default CourseCard;