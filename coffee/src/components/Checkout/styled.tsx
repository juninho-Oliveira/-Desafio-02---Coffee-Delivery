import styled from "styled-components";


export const ContainerMain = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    gap: 32px;
    
`;

export const ContainerPedido = styled.section`
    display: flex;
    flex-direction: column;
   /* border: 1px solid red;*/
    gap: 12px;
    width: 45rem;

    &> h1 {
        font-size: 18px;
        font-family: ${({ theme }) => theme.fonts.baloo};
        font-weight: bold;
        color: ${({ theme }) => theme.colors.baseSubtitle};
    }
`;

export const BoxPedido = styled.div`
    width: 100%;
    height: 23rem;
    border-radius: 6px;
    padding: 40px;
    background-color: ${({ theme }) => theme.colors.baseCard};

    &> .endereco {
        display: flex;
        flex-direction: column;
        margin-bottom: 28px;

        &> section {
            display: flex;
            align-items: center;
            gap: 5px;
            color: ${({ theme }) => theme.colors.yellowDark};
            font-family: ${({ theme }) => theme.fonts.roboto};
            

            &> h3 {
                color: ${({ theme }) => theme.colors.baseSubtitle};
                font-weight: 400;
            }
        }

        &> p {
            width: 355px;
            margin-right: 200px;
            text-align: end;
            font-size: 14px;
            font-family: ${({ theme }) => theme.fonts.roboto};
            color: ${({ theme }) => theme.colors.baseText};
        }


    }
    
`;

export const ContainerCoffe = styled.section`
    display: flex;
    flex-direction: column;
   /* border: 1px solid red;*/
    gap: 12px;
    width: auto;

    &> h1 {
        font-size: 18px;
        font-family: ${({ theme }) => theme.fonts.baloo};
        font-weight: bold;
        color: ${({ theme }) => theme.colors.baseSubtitle};
    }
`;

export const ContainerPagamento = styled.section`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    height: 13rem;
    padding: 40px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.baseCard};

    &> .pagamento {
        display: flex;
        flex-direction: column;

        &> section {
            display: flex;
            align-items: center;
            gap: 5px;
            color: ${({ theme }) => theme.colors.purple};
            font-family: ${({ theme }) => theme.fonts.roboto};
            

            &> h3 {
                color: ${({ theme }) => theme.colors.baseSubtitle};
                font-weight: 400;
            }
        }

        &> p {
            width: 444px;
            margin-right: 300px;
            text-align: end;
            font-size: 14px;
            font-family: ${({ theme }) => theme.fonts.roboto};
            color: ${({ theme }) => theme.colors.baseText};
        }
    }

    

`;

export const CardPagamento = styled.div`
    
    display: flex;
    flex-direction: row;
    gap: 12px;
    
    &> button {
        cursor: pointer;
        border: none;
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 8px;
        height: 51px;
        border-radius: 6px;
        background-color: ${({ theme }) => theme.colors.baseButton};
        color: ${({ theme }) => theme.colors.purple};

        &> p {
            color: ${({ theme }) => theme.colors.baseText};
        }

        &:hover {
            background-color: ${({theme})=> theme.colors.purpleLight};
            border: 0.5px solid ${({theme})=> theme.colors.purple};
        }
    }
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;

    .cep {
        width: 12.5rem;
    }

`;

export const Input = styled.input`
        border: 1px solid ${({ theme }) => theme.colors.baseButton};
        background-color: ${({ theme }) => theme.colors.baseInput};
        height: 2.6rem;
        padding: 10px;
        border-radius: 6px;
        color: ${({theme})=> theme.colors.baseText};

    &:focus {

        outline: none;
        border: 1px solid transparent; 
    }
`;


export const ContainerNumero = styled.div`
        display: flex;
        justify-content: space-between;
        .complemento {
            width: 27rem;
        }
`;

export const ContainerBairro = styled.div`
        display: flex;
        justify-content: space-between;
        
        .cidade {
            width: 22.4rem;
        }

        .uf {
            width: 3.7rem;
        }
`;

export const BoxPagamento = styled.section `
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 28rem;
    height: auto;

    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;

    background-color: ${({theme})=> theme.colors.baseCard};

`;

export const Carregando = styled.div `
    
`;
