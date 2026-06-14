import { Link } from 'react-router-dom';

export interface BlogCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

function BlogCard({ id, title, category, date, excerpt, image }: BlogCardProps) {
  return (
    <article className="card card--blog">
      <div className="card__image-wrapper">
        <img src={image} alt={title} className="card__image" />
      </div>
      <div className="card__body">
        <div className="card__meta">
          <span className="badge badge--category">{category}</span>
          <span className="card__date">{date}</span>
        </div>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{excerpt}</p>
      </div>
      <div className="card__footer">
        <Link to={`/blog/${id}`} className="card__link">
          Leer más
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;