import { ContainerCard } from "./styled"
import { ShoppingCart } from "@phosphor-icons/react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

interface PropsCard {
    id: number
    imagem: string;
    paragrafo: string;
    titulo: string;
    descricao: string;
    p?: string;
    preco: number;
    onSelectId: (id: number, quantidade: number, valor: number) => void;
}

export function CardList({ preco, imagem, paragrafo, titulo, descricao, p, id, onSelectId, }: PropsCard) {


    const [quanti, setQuanti] = useState<number>(1);
    const [precoTotal, setPrecoTotal] = useState<number>(preco);

    const somar = () => {
        // Aumenta a quantidade e recalcula o preço
        const novaQuantidade = quanti + 1;
        setQuanti(novaQuantidade);
        const novoPreco = novaQuantidade * preco;
        setPrecoTotal(novoPreco);

        // Envia os dados atualizados para o componente pai
        onSelectId(id, novaQuantidade, novoPreco);
    };

    const menos = () => {
        if (quanti > 1) {
            // Diminui a quantidade e recalcula o preço
            const novaQuantidade = quanti - 1;
            setQuanti(novaQuantidade);
            const novoPreco = novaQuantidade * preco;
            setPrecoTotal(novoPreco);

            // Envia os dados atualizados para o componente pai
            onSelectId(id, novaQuantidade, novoPreco);
        }
    };

    // Atualizando o preço e a quantidade ao inicializar o componente
    useEffect(() => {
        setPrecoTotal(quanti * preco);
    }, [preco, quanti]);

    const navigate = useNavigate();

    const handleButtonCart = () => {
        navigate('/Checkout', { state:{precoTotal}})
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
                        <span>R$</span> {precoTotal.toFixed(2).replace('.', ',')}
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