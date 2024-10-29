import { ContainerMain, BoxPedido, ContainerCoffe, ContainerPedido, ContainerPagamento, CardPagamento, ContainerInput } from "./styled"
import { MapPin, CurrencyDollar, CreditCard, Money, Bank } from "@phosphor-icons/react"

export function Carrinho() {
    return (
        <ContainerMain>
            <ContainerPedido>
                <h1>Complete seu pedido</h1>
                <BoxPedido>
                    
                    <div className="endereco">
                        <section>
                            <MapPin size={26} />
                            <h3>Endereço de Entrega</h3>
                        </section>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>

                    <ContainerInput>
                        <input type="text" placeholder="CEP" />
                        <input type="text" placeholder="Rua" />
                        <input type="text" placeholder="Número" />
                        <input type="text" placeholder="Complemento" />
                        <input type="text" placeholder="Bairro" />
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="UF" />
                    </ContainerInput>
                </BoxPedido>

                <ContainerPagamento>
                    <div className="pagamento">
                        <section>
                            <CurrencyDollar size={26} />
                            <h3>Pagamento</h3>
                        </section>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>

                    <CardPagamento>
                        <button>
                            < CreditCard size={26} />
                            <p>CARTÃO DE CRÉDITO</p>
                        </button>

                        <button>
                            < Bank size={26} />
                            <p>CARTÃO DE DÉBITO</p>
                        </button>

                        <button>
                            < Money size={26} />
                            <p>DINHEIRO</p>
                        </button>
                    </CardPagamento>
                </ContainerPagamento>
            </ContainerPedido>

            <ContainerCoffe>
                <h1>Cafés selecionados </h1>
            </ContainerCoffe>
        </ContainerMain>
    )
} 
