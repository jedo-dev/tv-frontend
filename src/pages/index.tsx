

import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from './mainpage.tsx';

const routerConfig = [
  {
    path: '/',
    element:<MainPage/>,
  },
];
 
export default createBrowserRouter(routerConfig);
