// import { useLocation } from "react-router-dom"
import { Card } from "../Card/CardPagamento"
import { Input, Carregando, ContainerNumero, BoxPagamento, ContainerBairro, ContainerMain, BoxPedido, ContainerCoffe, ContainerPedido, ContainerPagamento, CardPagamento, ContainerInput } from "./styled"
import { MapPin, CurrencyDollar, CreditCard, Money, Bank } from "@phosphor-icons/react"
import { useEffect, useState } from "react";

export function Carrinho() {
    const [novoElemento, setNovoElemento] = useState<any>([]);


    useEffect(() => {
        // Recuperando os dados do localStorage
        const savedData = localStorage.getItem('novoElemento');
        if (savedData) {
            setNovoElemento(JSON.parse(savedData)); // Convertendo de volta para o formato de array
        }

        
    }, []);

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
                {novoElemento.length === 0 ? (
                        <Carregando>
                            <h1>Carrinho vazio</h1>
                        </Carregando>
                    ) : (
                        <Card
                            lista={novoElemento}/>
                    )}

                    <hr />
                </BoxPagamento>
            </ContainerCoffe>
        </ContainerMain>
    )
} 
