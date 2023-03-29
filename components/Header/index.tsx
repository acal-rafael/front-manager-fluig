/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useContext, useEffect, useState } from 'react'
import Search from '../Search'
import Title from '../Title'

// import { IThemeContextProp } from '@/app/types/globalsTypes'
import { ThemeContext } from '@/app/context/theme'


export default function Header() {

  const { theme, toggleTheme, nameButton } = useContext(ThemeContext)

 
  return (
    <>
      <nav className="mb-4 flex flex-row justify-between">
        <Title 
          title={"Manager Fluig"} 
          className={``} 
        />

        <button 
          onClick={() => {
            localStorage.setItem('@manfluig/theme', String(theme))
            toggleTheme() 
            console.log('--------------------')        
          }}
          type="button" 
          className="
            text-white 
            bg-gray-800 
            hover:bg-gray-900 
            focus:outline-none 
            focus:ring-4 
            focus:ring-gray-300 
            font-medium 
            rounded-lg 
            text-sm 
            px-5 
            py-2.5 
            mr-2 
            dark:bg-gray-800 
            dark:hover:bg-gray-700
            dark:focus:ring-gray-700
            dark:border-gray-700"
          >
            {nameButton.toUpperCase()}
          </button>
      </nav>
      <Search placeholder="Digite para pesquisar..." classname="text-xl" props="" />
    </>
  )
}
