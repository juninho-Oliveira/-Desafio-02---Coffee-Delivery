
import { CardList } from "./CardList/Card"
import { ContainerMain } from "./styled"


export function Main() {
    return (
        <ContainerMain>
            <main>
                <div>
                    <h1>Nossos cafés</h1>
                </div>

                <div className="containerCardList">
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                </div>

            </main>
        </ContainerMain>
    )
}