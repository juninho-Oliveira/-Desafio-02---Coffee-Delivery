import { ContainerCard } from "./styled"
import img from '../../../assets/Coffee.png'
import { ShoppingCart } from "@phosphor-icons/react"
import { useState } from "react"

export function CardList() {

    const [quanti, setQuanti] = useState<number>(0);
    const [preco, setPreco] = useState<number>(0);

    function somar() {
        setQuanti(prevQuanti => prevQuanti + 1)
        setPreco(prevQuanti => prevQuanti + 9.90)
        
    }

    function menos() {
        setQuanti(prevQuanti => prevQuanti - 1)
        setPreco(prevQuanti => prevQuanti - 9.90)
    }


    return (
        <ContainerCard>
            <img src={img} alt="" />
            <div className="conteudo">
                <div><p>TRADICIONAL</p></div>
                <h3>Expresso Tradicional</h3>
                <p>O tradicional café feito com água quente e grãos moídos</p>

                <section>
                    <p>
                        <span>R$</span> {preco.toFixed(2).replace('.', ',')}
                    </p>

                    <div>
                        <div className="botao">
                            <button onClick={menos}>-</button>
                                    <p>{quanti}</p>
                            <button onClick={somar}>+</button>
                        </div>
                        <button title="Abrir carrinho de compras"> 
                            <ShoppingCart size={26} />
                        </button>
                    </div>

                </section>
            </div>
        </ContainerCard>
    )
}