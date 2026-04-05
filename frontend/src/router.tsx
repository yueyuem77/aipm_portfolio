import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import { HomePage, AboutPage, NotFoundPage } from './pages'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
