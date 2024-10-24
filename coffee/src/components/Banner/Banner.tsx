import { ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react"
import { BannerContainer, SpanContainer } from "./styled"
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
                            <SpanContainer variant={'primary'}>< ShoppingCart size={20}/></SpanContainer>
                            <p>Compra simples e segurança</p>
                        </div>
                        <div>
                            <SpanContainer variant={'secondary'}>< Package size={20}/></SpanContainer>
                            <p>Embalagem mantém o café intacto</p>
                        </div>
                        <div>
                            <SpanContainer variant={'danger'}>< Timer size={20}/></SpanContainer>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        <div>
                            <SpanContainer variant={'success'}>< Coffee size={20}/></SpanContainer>
                            <p>O café fresquinho até você</p>
                        </div>
                    </div>

                </div>

                <img src={imgame} alt="imagem de um copo de café " />
            </div>
        </BannerContainer>
    )
}