
import { CardList } from "./CardList/Card"
import { ContainerMain } from "./styled"
import expresso from '../../assets/Expresso.png'
import expressoAmerico from '../../assets/Americano.png'
import expressoCremoso from '../../assets/Expresso Cremoso.png'
import expressoGelado from '../../assets/Café Gelado.png'
import CafeComLeite from '../../assets/Café com Leite.png'
import Latte from '../../assets/Latte.png'
import Capuccino from '../../assets/Capuccino.png'
import Macchiato from '../../assets/Macchiato.png'
import Mocaccino from '../../assets/Mochaccino.png'
import chocolateQuente from '../../assets/Chocolate Quente.png'
import Cubano from '../../assets/Cubano.png'
import Havaiano from '../../assets/Havaiano.png'
import Arabe from '../../assets/Árabe.png'
import Irlandes from '../../assets/Irlandês.png'


interface CardData {
    id: number;
    title: string;
    content: string;
    description: string;
    p?: string;
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
            id: 2,
            title: 'Expresso Americano',
            content: 'Expresso diluído, menos intenso que o tradicional',
            description: 'Tradicional',
            img: expressoAmerico,
        },
        {
            id: 3,
            title: 'Expresso Cremoso',
            content: 'Café expresso tradicional com espuma cremosa',
            description: 'Tradicional',
            img: expressoCremoso,
        },
        {
            id: 4,
            title: 'Expresso Gelado',
            content: 'Bebida preparada com café expresso e cubos de gelo',
            description: 'Tradicional',
            p: 'Gelado',
            img: expressoGelado,
        },
        {
            id: 6,
            title: 'Café com Leite',
            content: 'Meio a meio de expresso tradicional com leite vaporizado',
            description: 'Tradicional',
            p: 'Com Leite',
            img: CafeComLeite,
        },
        {
            id: 7,
            title: 'Latte',
            content: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            description: 'Tradicional',
            p: 'Com Leite',
            img: Latte,
        },
        {
            id: 8,
            title: 'Capuccino',
            content: 'Bebida com canela feita de doses iguais de café, leite e espuma',
            description: 'Tradicional',
            p: 'COM LEITE',
            img: Capuccino,
        },
        {
            id: 9,
            title: 'Macchiato',
            content: 'Café expresso misturado com um pouco de leite quente e espuma',
            description: 'Tradicional',
            p: 'com leite',
            img: Macchiato,
        },
        {
            id: 10,
            title: 'Mocaccino',
            content: 'Café expresso com calda de chocolate, pouco leite e espuma',
            description: 'Tradicional',
            p: 'com leite ',
            img: Mocaccino,
        },
        {
            id: 11,
            title: 'Chocolate Quente',
            content: 'Bebida feita com chocolate dissolvido no leite quente e café',
            description: 'especial',
            p: 'com leite',
            img: chocolateQuente,
        },
        {
            id: 12,
            title: 'Cubano',
            content: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            description: 'Tradicional',
            p: 'gelado',
            img: Cubano,
        },
        {
            id: 13,
            title: 'Havaiano',
            content: 'Bebida adocicada preparada com café e leite de coco',
            description: 'especial',
            img: Havaiano,
        },
        {
            id: 14,
            title: 'Árabe',
            content: 'Bebida preparada com grãos de café árabe e especiarias',
            description: 'especial',
            img: Arabe,
        }
        ,
        {
            id: 15,
            title: 'Irlandês',
            content: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
            description: 'especial',
            p: 'ALCOÓLICO',
            img: Irlandes,
        }
    ]

    return (
        <ContainerMain>
            <main>
                <div>
                    <h1>Nossos cafés</h1>
                </div>

                <section>
                    <div className="containerCardList">
                        {cardData.map(card => {
                            return (
                                <CardList
                                    key={card.id}
                                    imagem={card.img}
                                    paragrafo={card.description}
                                    titulo={card.title}
                                    descricao={card.content}
                                    p={card.p} />
                            )
                        })}
                    </div>
                </section>

            </main>
        </ContainerMain>
    )
}