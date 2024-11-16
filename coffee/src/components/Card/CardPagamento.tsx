import { Linha, ContainerValor, ContainerPrincipal } from './styled'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { CardSelection } from '../CardPagamento/CardSelection';

interface PropsCart {
    lista: {
        title: string;
        img: string;
        id: number;
    }[]
}


export function Card({lista }: PropsCart) {

    // console.log('card pagamento', id)
    // console.log('card pagamento', title)
    // console.log('card pagamento', id)

    // const [entrega, setEntrega] = useState<number>(4.50)
    const [quanti, setQuanti] = useState<number>(0);
    const [preco, setPreco] = useState<number>(0);
    const [total, setTotal] = useState<number>(0)

    const entrega = 4.50;


    // function somar() {
    //     setQuanti(prevQuanti => prevQuanti + 1)
    //     setPreco(prevQuanti => prevQuanti + 9.90)
    // }

    // function menos() {
    //     setQuanti(prevQuanti => prevQuanti - 1)
    //     setPreco(prevQuanti => prevQuanti - 9.90)
    // }

    useEffect(() => {
        setTotal(preco + entrega)
    }, [preco])

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
                        />
                    )
                })}

                <ContainerValor>
                    <div>
                        <p>Total de itens</p> <span>R$ {quanti.toFixed(2).replace('.', ',')}</span>
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