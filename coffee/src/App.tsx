
import { Banner } from "./components/Banner/Banner"
import { Header } from "./components/Header/Header"
import { GlobalStyle } from "./global"
import { theme } from './themes/default'
import { ThemeProvider } from "styled-components"
import { Main } from "./components/Main/Main"

export function App() {

  return (
    <>
      < ThemeProvider theme={theme}>
      < GlobalStyle />
        <Header />
        < Banner />
        <Main />
      </ThemeProvider>
    </>
  )
}

