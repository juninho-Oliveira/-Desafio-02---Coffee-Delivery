import { GlobalStyle } from "./global"
import { theme } from './themes/default'
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router/Router"



export function App() {

  return (
    <>
      < ThemeProvider theme={theme}>
        <BrowserRouter>
        < Router />
        </BrowserRouter>  
        < GlobalStyle />
      </ThemeProvider>
    </>
  )
}

