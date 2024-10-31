import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { ContainerSuccess, DivInfo, ContainerEntrega, SpanIcone, SectionSuccess, CardEntrega } from "./styled";
import img from '../../assets/Illustration.png'


export function SuccessContainer() {
    return (
        <ContainerSuccess>
            <SectionSuccess>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>

                <ContainerEntrega>
                    <CardEntrega>
                        <div>
                            <SpanIcone variant={'primary'}><MapPin size={32}/></SpanIcone>
                            <p>Entrega em<strong> Rua João Daniel Martinelli, 102</strong> Farrapos- Porto Alegre, RS</p>
                        </div>
                        <DivInfo>
                            <SpanIcone variant={'secondary'}><Timer size={32}/></SpanIcone>
                            <p>Previsão de entrega<strong>20 min - 30 min</strong></p>
                        </DivInfo>
                        <DivInfo>
                            <SpanIcone variant={'danger'}><CurrencyDollar size={32}/></SpanIcone>
                            <p>Pagamento na entrega<strong>Cartão de Crédito</strong></p>
                        </DivInfo>
                    </CardEntrega>

                    <img src={img} alt="" />
                </ContainerEntrega>
                
            </SectionSuccess>

        </ContainerSuccess>
    )
}