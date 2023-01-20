import React from 'react'

// 全局样式
import "./index.css"
// react-router
import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

// 组件
import Home from './pages/home/home';
import Index from './pages/index';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    children:[
      {
        path:'/',
        element:<Index></Index>
      },
      {
        path:'auction',
        element:(
          <div>竞标项目</div>
        )
      }
    ]
  },
  {
    path:"login",
    element:(
      <div>login</div>
    )
  },
  {
    path:"resiger",
    element:(
      <div>resiger</div>
    )
  },
]);

// 加载
createRoot(document.getElementById("root") as any).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);