import { ContainerCard } from "./styled"
import img from '../../../assets/Coffee.png'

export function CardList() {

    const preco = 9.90

    return (
        <ContainerCard>
            <img src={img} alt="" />
            <div className="conteudo">
                <div><p>TRADICIONAL</p></div>
                <h3>Expresso Tradicional</h3>
                <p>O tradicional café feito com água quente e grãos moídos</p>

                <div>
                    <p><span>R$</span>{preco}</p>

                </div>
            </div>
        </ContainerCard>
    )
}