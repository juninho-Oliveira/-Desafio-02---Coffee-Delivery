import { GlobalStyled } from "./global"
import { Header } from "./styled"

export function App() {

  return (
    <>
      <GlobalStyled>


        <Header>
          <h1>logo</h1>

          <nav>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Sobre</a></li>
            </ul>
          </nav>
        </Header>

      </GlobalStyled>
    </>
  )
}

