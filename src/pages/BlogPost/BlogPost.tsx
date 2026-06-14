import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="page page--blog-post page--center">
        <div className="container">
          <h1 className="page-title">Artículo no encontrado</h1>
          <p className="page-text">
            No encontramos el artículo que estás buscando. Es posible que la URL haya cambiado.
          </p>
          <Link to="/blog" className="btn btn--primary">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page page--blog-post">
      <article className="section section--top">
        <div className="container article">
          <Link to="/blog" className="article__back">
            ← Volver al blog
          </Link>
          <header className="article__header">
            <div className="article__meta">
              <span className="badge badge--category">{post.category}</span>
              <span className="article__date">{post.date}</span>
              <span className="article__author">Por {post.author}</span>
            </div>
            <h1 className="article__title">{post.title}</h1>
          </header>
          <div className="article__image-wrapper">
            <img src={post.image} alt={post.title} className="article__image" />
          </div>
          <section className="article__content">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="article__paragraph">
                {paragraph}
              </p>
            ))}
          </section>
        </div>
      </article>
    </div>
  );
}

export default BlogPost;