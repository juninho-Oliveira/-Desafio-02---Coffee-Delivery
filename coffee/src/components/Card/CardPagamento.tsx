import { ContainerCardPagamento, Linha, ContainerValor, ContainerPrincipal } from './styled'
import { Trash } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

interface PropsCart {
    title: string;
    img: string; 
}


export function Card({title, img}:PropsCart) {

    // const [entrega, setEntrega] = useState<number>(4.50)
    const [quanti, setQuanti] = useState<number>(0);
    const [preco, setPreco] = useState<number>(0);
    const [total, setTotal] = useState<number>(0)

    const entrega = 4.50;


    function somar() {
        setQuanti(prevQuanti => prevQuanti + 1)
        setPreco(prevQuanti => prevQuanti + 9.90)
    }

    function menos() {
        setQuanti(prevQuanti => prevQuanti - 1)
        setPreco(prevQuanti => prevQuanti - 9.90)
    }

    useEffect (()=>{
        setTotal(preco + entrega)
    },[preco])

    const navigate = useNavigate();

    const handleButtonCorfim = () => {
        navigate('/Success')
    }


    return (
        <>
            <ContainerPrincipal>
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
                <Linha />

                <ContainerCardPagamento>
                    <img src={img} alt="" />
                    <div>
                        <p>{title}
                            <span>R${preco.toFixed(2).replace('.', ',')}</span>
                        </p>

                        <section className='botoes'>

                            <div className="botao">
                                <button >-</button>
                                <p>{quanti}</p>
                                <button>+</button>
                            </div>
                            <div className="deletar botao">
                                <button >
                                    <Trash size={16} /> <span>REMOVER</span></button>
                            </div>
                        </section>

                    </div>
                </ContainerCardPagamento>
                <Linha />

                <ContainerValor>
                    <div>
                        <p>Total de itens</p> <span>R$ {quanti.toFixed(2).replace('.',',')}</span>
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