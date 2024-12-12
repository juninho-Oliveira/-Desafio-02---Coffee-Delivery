
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
import { useState } from "react"


interface CardData {
    id: number;
    title: string;
    content: string;
    description: string;
    p?: string;
    img: string;
    quantidade: number;
    preco: number; 
}

export function Main() {
    const [novoElemento, setNovoElemento] = useState<any>([]);

    const cardData: CardData[] = [
        {
            id: 1,
            title: 'Expresso Tradicional',
            content: 'O tradicional café feito com água quente e grãos moídos',
            description: 'Tradicional',
            img: expresso,
            quantidade: 0,
            preco: 9.90,
        },
        {
            id: 2,
            title: 'Expresso Americano',
            content: 'Expresso diluído, menos intenso que o tradicional',
            description: 'Tradicional',
            img: expressoAmerico,
            quantidade: 0,
            preco: 9.90,
        },
        {
            id: 3,
            title: 'Expresso Cremoso',
            content: 'Café expresso tradicional com espuma cremosa',
            description: 'Tradicional',
            img: expressoCremoso,
            quantidade: 0,
            preco: 9.90,
        },
        {
            id: 4,
            title: 'Expresso Gelado',
            content: 'Bebida preparada com café expresso e cubos de gelo',
            description: 'Tradicional',
            p: 'Gelado',
            img: expressoGelado,
            quantidade: 0,
            preco: 9.90,
        },
        {
            id: 6,
            title: 'Café com Leite',
            content: 'Meio a meio de expresso tradicional com leite vaporizado',
            description: 'Tradicional',
            p: 'Com Leite',
            img: CafeComLeite,
            quantidade: 0,
            preco: 9.90,
        },
        {
            id: 7,
            title: 'Latte',
            content: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            description: 'Tradicional',
            p: 'Com Leite',
            img: Latte,
            quantidade: 0,
            preco: 9.90,
        },
        {
            id: 8,
            title: 'Capuccino',
            content: 'Bebida com canela feita de doses iguais de café, leite e espuma',
            description: 'Tradicional',
            p: 'COM LEITE',
            img: Capuccino,
            quantidade: 0,
            preco: 9.90,
        },
        {
            id: 9,
            title: 'Macchiato',
            content: 'Café expresso misturado com um pouco de leite quente e espuma',
            description: 'Tradicional',
            p: 'com leite',
            img: Macchiato,
            quantidade: 0,
            preco: 9.90,
        },
        {
            id: 10,
            title: 'Mocaccino',
            content: 'Café expresso com calda de chocolate, pouco leite e espuma',
            description: 'Tradicional',
            p: 'com leite ',
            img: Mocaccino,
            quantidade: 0,
            preco: 9.90,
        },
        {
            id: 11,
            title: 'Chocolate Quente',
            content: 'Bebida feita com chocolate dissolvido no leite quente e café',
            description: 'especial',
            p: 'com leite',
            img: chocolateQuente,
            quantidade: 0,
            preco: 9.90,
        },
        {
            id: 12,
            title: 'Cubano',
            content: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            description: 'Tradicional',
            p: 'gelado',
            img: Cubano,
            quantidade: 0,
            preco: 9.90,
        },
        {
            id: 13,
            title: 'Havaiano',
            content: 'Bebida adocicada preparada com café e leite de coco',
            description: 'especial',
            img: Havaiano,
            quantidade: 0,
            preco: 9.90,
        },
        {
            id: 14,
            title: 'Árabe',
            content: 'Bebida preparada com grãos de café árabe e especiarias',
            description: 'especial',
            img: Arabe,
            quantidade: 0,
            preco: 9.90,
        }
        ,
        {
            id: 15,
            title: 'Irlandês',
            content: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
            description: 'especial',
            p: 'ALCOÓLICO',
            img: Irlandes,
            quantidade: 0,
            preco: 9.90,
        }
    ]

    function IdCard(id: number, quantidade: number,) {
        // Encontra o item baseado no ID
        const arrayNovo = cardData.filter((e: any) => e.id === id);
        const novoItem = arrayNovo[0]; // Pega o primeiro item do array

        if (!novoItem) {
            console.error(`Item com id ${id} não encontrado!`);
            return;
        }

        // Atualiza a quantidade do item encontrado
        novoItem.quantidade += quantidade; // Adiciona a quantidade ao valor atual

        // Calcula o valor total
        const total = novoItem.quantidade * novoItem.preco;
        total.toFixed(2)

        // Recupera os itens já salvos no localStorage
        const storedData = localStorage.getItem('novoElemento');
        const savedItems: any[] = storedData ? JSON.parse(storedData) : [];

        // Verifica se o item já existe no array de itens salvos
        const itemExists = savedItems.some((item) => item.id === id);

        if (itemExists) {
            // Atualiza o item salvo no localStorage com a nova quantidade
            const updatedItems = savedItems.map(item =>
                item.id === id ? { ...item, quantidade: novoItem.quantidade, total } : item
            );
            localStorage.setItem('novoElemento', JSON.stringify(updatedItems)); // Salva no localStorage
        } else {
            // Caso o item não exista no localStorage, adiciona ele com a quantidade e preço
            savedItems.push({ ...novoItem, total });
            localStorage.setItem('novoElemento', JSON.stringify(savedItems)); // Salva no localStorage
        }

        // Atualiza o estado (se necessário)
        setNovoElemento((prev: any) => {
            const updatedArray = prev.map((item: any)=>
                
                item.id === id ? { ...item, quantidade: novoItem.quantidade, total } : item
            );
            return updatedArray; // Retorna o array atualizado
        });
    }
    

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
                                    id={card.id}
                                    imagem={card.img}
                                    paragrafo={card.description}
                                    titulo={card.title}
                                    descricao={card.content}
                                    p={card.p}
                                    onSelectId={IdCard}
                                    preco={card.preco}
                                     />
                            )
                        })}
                    </div>
                </section>

            </main>
        </ContainerMain>
    )
}