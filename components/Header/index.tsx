'use client'

import React from 'react'
import Search from '../Search'
import Title from '../Title'

export default function Header() {
  return (
    <nav className="mb-4">
      <Title 
        title={"Manager Fluig"} 
        className={``} 
      />
      <Search placeholder="Digite para pesquisar..." classname="text-xl" props=""/>
    </nav>
  )
}
