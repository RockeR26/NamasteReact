import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Login from './Login'
import Browse from './Browse'

const Body = () => {
const router = createBrowserRouter([{
    path:"/",
    Component:Login,
},
{
    path:"/browse",
    Component:Browse,
}
])
  return (
    <RouterProvider router={router}/>
  )
}

export default Body