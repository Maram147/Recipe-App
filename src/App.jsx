import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Meals from './components/Meals/Meals'
import Ingredients from './components/Ingredients/Ingredients'
import Area from './components/Area/Area'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import MealDetails from './components/MealDetails/MealDetails'


function App() {
    let router = createBrowserRouter([{
      path:'', element: <Layout />, children: [
        { index: true, element: <Meals /> },
        { path: 'ingredients', element: <Ingredients /> },
        { path: 'area', element: <Area /> },
         { path: "mealdetails/:id", element: <MealDetails /> },
       
      ]
  
    }])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
