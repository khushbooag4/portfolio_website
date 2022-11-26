import React from 'react'
import { lazy } from 'react';
import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Error404 from 'pages/errors/Errors404';

const Home = lazy(() => import('pages/home/Home'));
const Projects = lazy(() => import('pages/projects/Projects'));
const Contact = lazy(() => import('pages/contact/Contact'));
const Education = lazy(() => import('pages/education/Education'));
const Experience = lazy(() => import('pages/experience/Experience'));


function Navigation() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Suspense>
  </Router>
  )
}

export default Navigation