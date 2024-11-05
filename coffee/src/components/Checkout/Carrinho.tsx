import { useLocation } from "react-router-dom"
import { Card } from "../Card/CardPagamento"
import { Input, ContainerNumero, BoxPagamento, ContainerBairro, ContainerMain, BoxPedido, ContainerCoffe, ContainerPedido, ContainerPagamento, CardPagamento, ContainerInput } from "./styled"
import { MapPin, CurrencyDollar, CreditCard, Money, Bank } from "@phosphor-icons/react"

export function Carrinho() {

    const location = useLocation();

    const { item } = location.state || {};
    // console.log("Item no Carrinho:", item.title);

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
                        <Input className="cep" type="number" placeholder="CEP" />

                        <ContainerInput>
                            <Input type="text" placeholder="Rua" />
                        </ContainerInput>

                        <ContainerNumero>
                            <Input type="number" placeholder="Número" />
                            <Input className="complemento" type="text" placeholder="Complemento" />
                        </ContainerNumero>

                        <ContainerBairro>
                            <Input type="text" placeholder="Bairro" />
                            <Input className="cidade" type="text" placeholder="Cidade" />
                            <Input className="uf" type="text" placeholder="UF" />
                        </ContainerBairro>
                    </ContainerInput>
                </BoxPedido>

                <ContainerPagamento>
                    <div className="pagamento">
                        <section>
                            <CurrencyDollar size={26} />
                            <h3>Pagamento</h3>
                        </ section>
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

                <BoxPagamento>
                    {
                        item === undefined ? (
                            <div>
                                <h1>Carrinho vazio</h1>
                            </div>
                        ) : (
                            <Card title={item.titulo} img={item.imagem} />
                        )
                    }

                    <hr />
                </BoxPagamento>
            </ContainerCoffe>
        </ContainerMain>
    )
} 
