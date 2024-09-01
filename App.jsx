import React from 'react'
import Header from './components/Header'
import './App.css'
import { Outlet } from 'react-router-dom'
import {ThemeProvider } from './contexts/ThemeContext';

export default function app() {
  // const [isDark, setIsDark] = useState(
  //   JSON.parse(localStorage.getItem("isDarkMode"))
  // );
  return (
    <ThemeProvider >
        <Header />
       <Outlet />
    </ThemeProvider>
  )
}
