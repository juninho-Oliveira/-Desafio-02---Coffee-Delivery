import { ContainerCard } from "./styled"
import { ShoppingCart } from "@phosphor-icons/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

interface PropsCard {
    imagem: string;
    paragrafo: string;
    titulo: string;
    descricao: string;
    p?: string;
}

export function CardList({ imagem, paragrafo, titulo, descricao, p }: PropsCard) {

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

    const navigate = useNavigate();

    const handleButtonCart = () => {
        navigate('/Checkout')
    }


    return (
        <ContainerCard>
            <img src={imagem} alt="" />
            <div className="conteudo">
                <div className="containerConteudo">
                    <div>
                        <p>{paragrafo}</p>
                    </div>

                    <div>
                        {p && (<p>{p}</p>
)}
                    </div>

                </div>
                <h3>{titulo}</h3>
                <p>{descricao}</p>

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
                        <button onClick={handleButtonCart} title="Abrir carrinho de compras">
                            <ShoppingCart size={26} />
                        </button>
                    </div>

                </section>
            </div>
        </ContainerCard>
    )
}