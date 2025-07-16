import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: '/home',
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: '/contact',
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
    {
      path: '/user',
      element: (
        <>
         <Navbar/>
         <User/>
        </>
      ),
    },
    {
      path: '/user/:username',
      element: (
        <>
         <Navbar/>
         <User/>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
