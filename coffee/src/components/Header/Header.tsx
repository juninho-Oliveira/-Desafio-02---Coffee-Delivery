import { ShoppingCart, MapPinArea } from "@phosphor-icons/react"
import { HeaderStyled } from "./styled.tsx"
import logo from '../../assets/Logo.png'
import { useNavigate } from "react-router-dom"

export function Header() {
    const navigate = useNavigate();

    const handleButtonCart = () => {
        navigate('/Checkout')
    } 

    return (
        <>
        <HeaderStyled>
            <nav>
                <img src={logo} alt="" />

                <div>
                    <div className="map">
                        < MapPinArea size={22} />
                        <p>Ferraz de vasconcelos, SP</p>
                    </div>
                    <button title="carrinho" onClick={handleButtonCart} className="carrinho">
                        < ShoppingCart size={22} />
                    </button>
                </div>
            </nav>
        </HeaderStyled>
        </>
    )
}