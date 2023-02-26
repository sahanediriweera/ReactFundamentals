import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home';



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },{
      path:"/user",
      element:<div>Hello user</div>
    },{
      path:"/home",
      element:<Home/>
    }
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App