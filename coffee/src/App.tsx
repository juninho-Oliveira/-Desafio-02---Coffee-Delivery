
import { GlobalStyle } from "./global"
import { Header } from "./styled"
import logo from './assets/Logo.png'
import { theme } from './themes/default'
import { ThemeProvider } from "styled-components"
import { ShoppingCart, MapPinArea } from "@phosphor-icons/react"

export function App() {

  return (
    <>
      < ThemeProvider theme={theme}>
      < GlobalStyle />
        <Header>
          <nav>
              <img src={logo} alt="" />

            <div>
              <div className="map"> 
                < MapPinArea size={22}/>
                Porto Alegre, RS
              </div>
              <div className="carrinho">
                < ShoppingCart size={22} />
                </div>
            </div>
          </nav>
        </Header>
      </ThemeProvider>
    </>
  )
}

