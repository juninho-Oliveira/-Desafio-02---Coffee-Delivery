
import { CardList } from "./CardList/Card"
import { ContainerMain } from "./styled"
import expresso from '../../assets/Expresso.png'

interface CardData {
    id: number;
    title: string;
    content: string;
    description: string;
    img: string; // Propriedade para a imagem
  }

export function Main() {

    const cardData: CardData[] = [
        {
        id: 1, 
        title: 'Expresso Tradicional', 
        content: 'O tradicional café feito com água quente e grãos moídos',
        description: 'Tradicional',
        img: expresso,
        },
        {
            id: 1, 
            title: 'Expresso Tradicional', 
            content: 'O tradicional café feito com água quente e grãos moídos',
            description: 'Tradicional',
            img: expresso,
            },
    ]

    return (
        <ContainerMain>
            <main>
                <div>
                    <h1>Nossos cafés</h1>
                </div>

                <div className="containerCardList">
                    {cardData.map(card => {
                        return (
                            <CardList key={card.id} imagem={card.img} paragrafo={card.description} titulo={card.title} descricao={card.content}/>
                        )
                    })}
                </div>

            </main>
        </ContainerMain>
    )
}