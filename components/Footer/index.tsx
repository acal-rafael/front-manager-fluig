import React from 'react'

export default function Footer() {
  return (
    <footer className="
      fixed 
      bottom-0 
      left-0 
      z-20 
      w-full 
      p-4 
      border-t 
      //text-gray-300 
      border-gray-600 
      shadow 
      md:flex 
      md:items-center 
      md:justify-between 
      md:p-6 
      dark:bg-gray-800 
      dark:border-gray-600"
    >
    <span className="
      text-sm 
      sm:text-center 
      dark:text-gray-400"
    >© 2023 <a href="https://flowbite.com/" className="hover:underline text-blue-500 font-bold">ManagerFluig™</a>. Todos os direitos reservados.
    </span>
    <ul className="
      flex 
      flex-wrap 
      items-center 
      mt-3 
      text-sm 
      font-medium 
      text-gray-300 
      dark:text-gray-400 
      sm:mt-0"
    >
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">Sobre</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Politica de privacidade</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licenças</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contatos</a>
        </li>
    </ul>
</footer>
  )
}
