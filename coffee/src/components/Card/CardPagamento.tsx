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

    //const [entrega, setEntrega] = useState<number>(4.50)
    const [totalItens, setTotalItens] = useState<number>(0);
    const [total, setTotal] = useState<number>(0)

    const entrega = 4.50;
    
    useEffect(() => {
        setTotal(totalValor + entrega)
        setTotalItens(lista.length)
    }, [totalItens])

    const navigate = useNavigate();

    const handleButtonCorfim = () => {
        navigate('/Success')
    }

    function IdCard(id: number) {
        alert(quantidade)
        
    }


    return (
        <>
            <ContainerPrincipal>

                {lista.map((e: any) => {
                    return (
                        <CardSelection
                            onSelectId={IdCard}
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