import { ContainerCardPagamento } from './styled'
import img from '../../assets/Coffee.png'
import { Trash } from '@phosphor-icons/react'



export function Card() {

    const total = '9,90'
    return (
        <>
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
            <hr />

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
            <hr />
            
            <section>
                <div><p>Total de itens</p> <span>RS {total}</span></div>
                <div><p>Entrega</p> <span>RS {total}</span></div>
                <div><p>Total</p> <span>RS {total}</span></div>

                <button>CONFIRMAR PEDIDO</button>
            </section>
        </>
    )
}