import { ContainerValor, ContainerPrincipal } from './styled'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { CardSelection } from '../CardPagamento/CardSelection';

interface PropsCart {
    totalValor: number;
    lista: {
        title: string;
        img: string;
        id: number;
    }[];
    quantidade: number;
}


export function Card({ lista, totalValor, quantidade }: PropsCart) {

    const [totalItens, setTotalItens] = useState<number>(lista.length);
    const [total, setTotal] = useState<number>(totalValor + 4.50); // Já somando o valor da entrega
    const [novaLista, setNovaLista] = useState<any[]>(lista);
    const entrega = 4.50;

    const navigate = useNavigate();

    const handleButtonCorfim = () => {
        navigate('/Success');
    }
    
    // Função para excluir um item da lista
    function ExcluirCard(id: number) {
        const novaListaAtualizada = novaLista.filter((item: any) => item.id !== id);
        setNovaLista(novaListaAtualizada);
    }

    // Atualizar o total de itens e o total de valor
    useEffect(() => {
        setTotalItens(novaLista.length);  // Atualiza o número de itens
        const novoTotalValor = novaLista.reduce((acc, item) => acc + item.total, 0);
        setTotal(novoTotalValor + entrega); // Atualiza o total considerando os itens restantes e a entrega
    }, [novaLista]);


    return (
        <>
            <ContainerPrincipal>

                {novaLista.map((e: any) => {
                    return (
                        <CardSelection
                            id={e.id}
                            onSelectId={ExcluirCard}
                            img={e.img}
                            title={e.title}
                            quantidade={e.quantidade}
                            precoValor={e.total}
                        />
                    )
                })}

                <ContainerValor>
                    <div>
                        <p>Total de itens</p> <span> {totalItens}</span>
                    </div>
                    <div>
                        <p>Entrega</p> <span>R$ {entrega.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div >
                        <p className='total'>Total <span>R$ {total.toFixed(2).replace('.', ',')}</span></p>
                    </div>
                </ContainerValor>

                <button onClick={handleButtonCorfim} className='confirma'>CONFIRMAR PEDIDO</button>
            </ContainerPrincipal>
        </>
    )
}