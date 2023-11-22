import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { DCPage } from '../heroes/pages/DCPage'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { NotFound } from '../heroes/pages/NotFound'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { Navbar } from '../ui/components/Navbar'

export const AppRouter = () => {
  return (
    <>
        <Routes>
          {/* Aquí irían rutas de auth, registro, forgot password */}          
            <Route path='login' element={<LoginPage/>}/>

            <Route path='/*' element={<HeroesRoutes/>}/>           
        </Routes>
    </>
  )
}
