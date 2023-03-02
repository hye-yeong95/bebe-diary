import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Diaries from './pages/Diaries'
import App from './App'
import NotFound from './pages/NotFound'
import DiaryDetail from './pages/DiaryDetail'
import './index.css'
import NewDiary from './pages/NewDiary'



const isAuthenticated = true;

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: '/diaries', element: isAuthenticated ? <Diaries /> : <Login /> },
      { path: '/diary/:diaryId', element: <DiaryDetail /> },
      { path: '/diary/new', element: <NewDiary /> }
    ]}
   ])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)

