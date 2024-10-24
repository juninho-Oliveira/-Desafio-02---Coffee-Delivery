
import { Header } from "./components/Header/Header"
import { GlobalStyle } from "./global"
import { theme } from './themes/default'
import { ThemeProvider } from "styled-components"


export function App() {

  return (
    <>
      < ThemeProvider theme={theme}>
      < GlobalStyle />
        <Header />
      </ThemeProvider>
    </>
  )
}

