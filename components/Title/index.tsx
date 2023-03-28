import React from 'react'

type tTitle = {
  title?: string,
  className?: string,
  props?: React.ReactNode
}

export default function Title({ className, title, ...props } : tTitle) {
  return <h2 {...props} className={`text-4xl mb-4 font-extrabold dark:text-white ${className}`}>
    {title}
  </h2>
}
