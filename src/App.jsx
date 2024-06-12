import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import React, { createContext } from 'react'
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import CosPlan from './components/CosPlan';
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import Expenses from './components/Expenses';
import Page404 from './components/Page404';
import Home from './components/Home'
import LandingPage from "./components/LandingPage";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<LandingPage />} >
        <Route path="/home" element={<Home />} />
        <Route path="/cosplan" element={<CosPlan />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    )
  )
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App