/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { IThemeContextProp, Theme } from "../types/globalsTypes";


export const ThemeContext = createContext<IThemeContextProp>(
  {} as IThemeContextProp
)

interface IThemeProviderProps {
  children: React.ReactNode
}

export const ThemeContextProvider = ({ children }: IThemeProviderProps ) => {
  
  const [theme, setTheme] = useState<Theme>('light')
  const [nameButton, setNameButton] = useState<Theme>("dark")

  const toggleTheme = () => {
    setTheme(nameButton === 'light' ? 'dark' : 'light')
    setNameButton(nameButton === 'dark' ? 'light' : 'dark')
  }
  
  console.log("Theme: ", theme)

  return (
    <ThemeContext.Provider 
      value={{
        theme,
        nameButton,
        toggleTheme,
        setNameButton
      }}
    >
      { children }
    </ThemeContext.Provider>
  );
}
