import { ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react"
import { BannerContainer } from "./styled"
import imgame from "../../assets/Imagem-café.png"


export function Banner() {
    return (
        < BannerContainer >
            <div >
                <div className="texto">
                    <div className="titulo">

                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                    </div>

                    <div className="items">
                        <div>
                            <span>< ShoppingCart size={16}/></span>
                            <p>Compra simples e segurança</p>
                        </div>
                        <div>
                            <span>< Package size={16}/></span>
                            <p>Embalagem mantém o café intacto</p>
                        </div>
                        <div>
                            <span>< Timer size={16}/></span>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        <div>
                            <span>< Coffee size={16}/></span>
                            <p>O café fresquinho até você</p>
                        </div>
                    </div>

                </div>

                <img src={imgame} alt="imagem de um como de café " />
            </div>


        </BannerContainer>
    )
}