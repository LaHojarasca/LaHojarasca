import BlogCard from '../../components/BlogCard/BlogCard';
import { blogPosts } from '../../data/blogPosts';

function Blog() {
  return (
    <div className="page page--blog">
      <section className="section section--top">
        <div className="container">
          <div className="section__header">
            <h1 className="page-title">Blog</h1>
            <p className="section__subtitle">
              Exploraciones, ensayos y explicaciones sobre física, educación y ciencia, pensadas
              para el aula y más allá.
            </p>
          </div>

          <div className="section__grid section__grid--three">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                category={post.category}
                date={post.date}
                excerpt={post.excerpt}
                image={post.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;