import { ContainerMain, ContainerCoffe, ContainerPedido, ContainerPagamento, CardPagamento, ContainerInput } from "./styled"
import { MapPin, CurrencyDollar, CreditCard, Money, Bank } from "@phosphor-icons/react"

export function Carrinho() {
    return (
        <ContainerMain>
            <ContainerPedido>
                <h1>Complete seu pedido</h1>
                <div>
                    <div>
                        <MapPin size={26} />
                        <h3>Endereço de Entrega</h3>
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
                </div>

                <ContainerPagamento>
                    <div>
                        <CurrencyDollar size={26} />
                        <h3>Pagamento</h3>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>

                    <div>
                        <CardPagamento>
                            < CreditCard size={26}/>
                            <p>CARTÃO DE CRÉDITO</p>
                        </CardPagamento>

                        <CardPagamento>
                            < Bank size={26}/>
                            <p>CARTÃO DE DÉBITO</p>
                        </CardPagamento>

                        <CardPagamento>
                            < Money size={26}/>
                            <p>DINHEIRO</p>
                        </CardPagamento>
                    </div>
                </ContainerPagamento>
            </ContainerPedido>

            <ContainerCoffe>
                <h1>Cafés selecionados </h1>
            </ContainerCoffe>
        </ContainerMain>
    )
} 
