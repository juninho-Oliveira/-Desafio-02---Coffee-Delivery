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
    }[]
}


export function Card({ lista, totalValor }: PropsCart) {

    //const [entrega, setEntrega] = useState<number>(4.50)
    const [totalItens, setTotalItens] = useState<number>(0);
    const [preco, setPreco] = useState<number>(0);
    const [total, setTotal] = useState<number>(0)

    const entrega = 4.50;

    useEffect(() => {
        setTotal(totalValor + entrega)
        setTotalItens(lista.length)
    }, [preco])

    // console.log(`Total: ${totalValor}`)

    const navigate = useNavigate();

    const handleButtonCorfim = () => {
        navigate('/Success')
    }


    return (
        <>
            <ContainerPrincipal>

                {lista.map((e: any) => {
                    return (
                        <CardSelection
                            img={e.img}
                            title={e.title}
                            quantidade={e.quantidade}
                            precoValor={e.total}
                        />
                    )
                })}

                <ContainerValor>
                    <div>
                        <p>Total de itens</p> <span>R$ {totalItens.toFixed(2).replace('.', ',')}</span>
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