import React from 'react';
import { useRoutes } from 'react-router-dom';

import Blog from '@/pages/blog';
import Contacts from '@/pages/contacts';
import Home from '@/pages/home';
import Solutions from '@/pages/solutions';
import Services from '@/pages/services';
import AboutUs from '@/pages/aboutUs/elements';
import Faqs from '@/pages/faqs';
import OurTeam from '@/pages/ourTeam';

export const DynamicRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'home', element: <Home /> },
    { path: 'solutions', element: <Solutions /> },
    { path: 'services', element: <Services /> },
    { path: 'aboutus', element: <AboutUs /> },
    { path: 'blog', element: <Blog /> },
    { path: 'contacts', element: <Contacts /> },
    { path: 'faqs', element: <Faqs /> },
    { path: 'ourteam', element: <OurTeam /> },
  ]);
  return routes;
};
