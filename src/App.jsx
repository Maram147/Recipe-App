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
import NotFound from './components/NotFound/NotFound'
import { Offline, Online } from "react-detect-offline";
import OfflinePage from './components/OfflinePage/OfflinePage'

function App() {
  let router = createBrowserRouter([{
    path: '', element: <Layout />, children: [
      { index: true, element: <Meals /> },
      { path: 'ingredients', element: <Ingredients /> },
      { path: 'area', element: <Area /> },
      { path: "mealdetails/:id", element: <MealDetails /> },
      { path: "*", element: <NotFound /> },


    ]

  }])

  return (
    <>
      <Online>
        <RouterProvider router={router}></RouterProvider>
      </Online>
      <Offline>
        <OfflinePage />
      </Offline>
    </>
  )
}

export default App
