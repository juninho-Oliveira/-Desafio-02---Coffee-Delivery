import { ContainerCard } from "./styled"
import { ShoppingCart } from "@phosphor-icons/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

interface PropsCard {
    id: number
    imagem: string;
    paragrafo: string;
    titulo: string;
    descricao: string;
    p?: string;
    onSelectId: (id: number) => void; 
}

export function CardList({ imagem, paragrafo, titulo, descricao, p, id, onSelectId }: PropsCard) {


    const [quanti, setQuanti] = useState<number>(0);
    const [preco, setPreco] = useState<number>(9.90);

    function somar() {

        onSelectId(id)
        setQuanti((prevQuanti) => {
            const novaQuantidade = prevQuanti + 1
            setPreco(novaQuantidade * 9.90)
            return novaQuantidade
        })  
    }

    function menos() {
        if(quanti > 0) {
            setQuanti((prevQuanti)=> {
                const novaQuantidade = prevQuanti - 1;        
                setPreco(novaQuantidade * 9.90)
                return novaQuantidade
            })
        }
    }

   const navigate = useNavigate();
    
    const handleButtonCart = () => {
        let valor = quanti;
        navigate('/Checkout', {
            state: { valor }
        })
        
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