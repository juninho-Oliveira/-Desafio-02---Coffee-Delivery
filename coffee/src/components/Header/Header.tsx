import { ShoppingCart, MapPinArea } from "@phosphor-icons/react"
import { HeaderStyled } from "./styled.tsx"
import logo from '../../assets/Logo.png'

export function Header() {
    return (
        <>
        <HeaderStyled>
            <nav>
                <img src={logo} alt="" />

                <div>
                    <div className="map">
                        < MapPinArea size={22} />
                        Porto Alegre, RS
                    </div>
                    <div className="carrinho">
                        < ShoppingCart size={22} />
                    </div>
                </div>
            </nav>
        </HeaderStyled>
        </>
    )
}