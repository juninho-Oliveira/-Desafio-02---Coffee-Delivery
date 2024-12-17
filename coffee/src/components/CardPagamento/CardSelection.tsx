import { useState } from "react";
import { ContainerCardPagamento } from "./styled"
import { Trash } from '@phosphor-icons/react'

interface PropsCard {
    img: string;
    title: string;
    quantidade: number;
    precoValor: number;
    id: number;
    onSelectId: (id: number) => void;
}

export function CardSelection ({id, img, title, quantidade, precoValor, onSelectId}: PropsCard) {

    const [quanti, setQuanti] = useState<number>(quantidade);
    const [preco, setPreco] = useState<number>(quantidade * precoValor); // Inicializa o preço com base na quantidade

    function somar() {
        setQuanti(prevQuanti => {
            const newQuanti = prevQuanti + 1;
            setPreco(newQuanti * precoValor); // Atualiza o preço com a nova quantidade
            return newQuanti;
        });
    }

    function menos() {
        setQuanti(prevQuanti => {
            if (prevQuanti > 1) { // Garante que a quantidade não será negativa
                const newQuanti = prevQuanti - 1;
                setPreco(newQuanti * precoValor); // Atualiza o preço com a nova quantidade
                return newQuanti;
            }
            return prevQuanti; // Não muda a quantidade se for 1
        });
    }

    function excluir(id: any) {
        onSelectId(id); // Chama a função para excluir o item
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
                    <button onClick={() => excluir(id)}>
                        <Trash size={16} /> <span>REMOVER</span></button>
                </div>
            </section>

        </div>
    </ContainerCardPagamento>
    )
}