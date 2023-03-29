'use client'
import React, { useContext } from "react"

import Header from "@/components/Header"
import Body from "@/components/Body"
import Footer from "@/components/Footer"

import { ThemeContext } from "./context/theme"

export default function Home() {

  const { theme } = useContext(ThemeContext)

  const themeLocal = localStorage.getItem('@manfluig/theme')

  if (!themeLocal) {

    console.log("ThemeLocal NULL: ", themeLocal)
    console.log("Theme NULL: ", theme)
    const color = theme === 'light' ? '#fff' : '#333'
    const backgroundColor = theme === 'light' ? '#333' : '#fff' 
    document.body.style.color = color
    document.body.style.backgroundColor = backgroundColor
  } else {

    console.log("ThemeLocal NULL: ", themeLocal)
    console.log("Theme NULL: ", theme)
    const color = themeLocal === 'light' ? '#fff' : '#333'
    const backgroundColor = themeLocal === 'light' ? '#333' : '#fff' 
    document.body.style.color = color
    document.body.style.backgroundColor = backgroundColor
  }

  return (
    <React.Fragment>
      
      <Header />

      <hr />
      
      <Body />

      <Footer />

    </React.Fragment>
  )
}
