import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Nosotros from './pages/Nosotros/Nosotros';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/BlogPost/BlogPost';
import Ensenanza from './pages/Ensenanza/Ensenanza';
import Estudiar from './pages/Estudiar/Estudiar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'nosotros',
        element: <Nosotros />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'blog/:id',
        element: <BlogPost />
      },
      {
        path: 'ensenanza',
        element: <Ensenanza />
      },
      {
        path: 'estudiar',
        element: <Estudiar />
      },
      {
        path: '*',
        element: (
          <div className="page page--center">
            <div className="container">
              <h1 className="page-title">Página no encontrada</h1>
              <p className="page-text">
                La ruta que intentas visitar no existe en La Hojarasca.
              </p>
            </div>
          </div>
        )
      }
    ]
  }
], {
  
  basename: '/' 
});

export default router;