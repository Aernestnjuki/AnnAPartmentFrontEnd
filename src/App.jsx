import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import { MainLayout } from './layout/MainLayout'
import { HomePage } from './pages/HomePage'
import { Blog } from './pages/BlogContent'
import { Property } from './pages/PropertyInfo'

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/blog-content' element={<Blog/>} />
        <Route path='/property-info' element={<Property />} />
        <Route path='/admin' element={''} />
        <Route path='/login' element={''} />
      </Route>
    )
  )
  

  return (
    <RouterProvider router={route} />
  )
}

export default App
