import { ContainerCardPagamento, Linha, ContainerValor, ContainerPrincipal } from './styled'
import img from '../../assets/Coffee.png'
import { Trash } from '@phosphor-icons/react'



export function Card() {

    const total = '9,90'
    return (
        <>
            <ContainerPrincipal>
                <ContainerCardPagamento>
                    <img src={img} alt="" />
                    <div>
                        <p>Expresso Tradicional
                            <span>R${total}</span>
                        </p>

                        <section className='botoes'>

                            <div className="botao">
                                <button >-</button>
                                <p>1</p>
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

                <ContainerCardPagamento>
                    <img src={img} alt="" />
                    <div>
                        <p>Expresso Tradicional
                            <span>R${total}</span>
                        </p>

                        <section className='botoes'>

                            <div className="botao">
                                <button >-</button>
                                <p>1</p>
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
                        <p>Total de itens</p> <span>R$ {total}</span>
                    </div>
                    <div>
                        <p>Entrega</p> <span>R$ {total}</span>
                    </div>
                    <div >
                        <p className='total'>Total <span>R$ {total}</span></p> 
                    </div>
                </ContainerValor>
                
                <button className='confirma'>CONFIRMAR PEDIDO</button>
            </ContainerPrincipal>
        </>
    )
}