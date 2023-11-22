import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { DCPage } from '../heroes/pages/DCPage'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { NotFound } from '../heroes/pages/NotFound'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='marvel' element={<MarvelPage/>}/>
            <Route path='dc' element={<DCPage/>}/>

            <Route path='login' element={<LoginPage/>}/>
            <Route path='*' element={<NotFound/>}/>

            <Route path='/' element={<Navigate to="/marvel"/>}/>
            <Route path="/*" element={<Navigate to="/not-found" />} />
            
        </Routes>
    </>
  )
}
