'use client'

import { useState } from 'react'



interface ISearchProps {
  placeholder: string,
  props: string,
  classname: string
}


export default function Search({ placeholder, classname, ...props }: ISearchProps) {
  
  const [placeHolder, setPlaceHolder] = useState<string>(placeholder)
  const [classPropsName, setClassPropsName] = useState<string>(classname)
  
  return (
    <div>
      <input {...props}  placeholder={placeHolder} type="text" id="default-input" 
      className={`
          bg-gray-50 border 
          border-gray-300 
          text-gray-900 
          text-sm 
          rounded-2xl
          p-4
          focus:ring-blue-500 
          focus:border-blue-500 
          block 
          w-full 
          dark:bg-gray-700 
          dark:border-gray-600 
          dark:placeholder-gray-400 
          dark:text-white 
          dark:focus:ring-blue-500 
          dark:focus:border-blue-500 
          ${classPropsName}
        `} 
      />
    </div>
  )
}
