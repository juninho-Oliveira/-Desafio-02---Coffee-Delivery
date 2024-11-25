import { useState } from "react";
import { ContainerCardPagamento } from "./styled"
import { Trash } from '@phosphor-icons/react'

interface PropsCard {
    img: string;
    title: string;
    quantidade: number;
}

export function CardSelection ({img, title, quantidade}: PropsCard) {

    // console.log('cardSelection', img)

    const [quanti, setQuanti] = useState<number>(quantidade);
    const [preco, setPreco] = useState<number>(0);
    // const [total, setTotal] = useState<number>(0)

    // const entrega = 4.50;


    function somar() {
        setQuanti(prevQuanti => prevQuanti + 1)
        setPreco(prevQuanti => prevQuanti + 9.90)
    }

    function menos() {
        setQuanti(prevQuanti => prevQuanti - 1)
        setPreco(prevQuanti => prevQuanti - 9.90)
    }

    return (
        <ContainerCardPagamento>
        <img src={img} alt="" />
        <div>
            <p>{title}
                <span>R${preco.toFixed(2).replace('.', ',')}</span>
            </p>

            <section className='botoes'>

                <div className="botao">
                    <button onClick={menos}>-</button>
                    <p>{quanti}</p>
                    <button onClick={somar}>+</button>
                </div>
                <div className="deletar botao">
                    <button >
                        <Trash size={16} /> <span>REMOVER</span></button>
                </div>
            </section>

        </div>
    </ContainerCardPagamento>
    )
}