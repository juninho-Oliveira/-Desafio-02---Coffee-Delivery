
import { GlobalStyle } from "./global"
import { Header } from "./styled"

import { theme } from './themes/default'
import { ThemeProvider } from "styled-components"

export function App() {

  return (
    <>
      < GlobalStyle />
      < ThemeProvider theme={theme}>
        <Header>
          <h1>logo</h1>

          <nav>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Sobre</a></li>
            </ul>
          </nav>
        </Header>
      </ThemeProvider>
    </>
  )
}

