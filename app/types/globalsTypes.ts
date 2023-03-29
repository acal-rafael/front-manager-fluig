export type Theme = "light" | "dark"

export interface IThemeContextProp {
  theme: Theme;
  nameButton: Theme;
  toggleTheme: Function;
  setNameButton: Function;
}

