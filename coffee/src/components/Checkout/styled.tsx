import styled from "styled-components";


export const ContainerMain = styled.main `
    width: 80%;
    display: flex;
    justify-content: space-between;
`;

export const ContainerPedido = styled.section `
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    width: 45rem;

    &> h1 {
        font-size: 18px;
        font-family: ${({theme})=> theme.fonts.baloo};
        font-weight: bold;
        color: ${({theme})=> theme.colors.baseSubtitle};
    }
`;

export const ContainerCoffe= styled.section `
    display: flex;
    

    border: 1px solid black;
    width: 33rem;
    height: 31rem;
`;

export const ContainerPagamento = styled.section `
    

`;

export const CardPagamento = styled.div `

`;

export const ContainerInput = styled.div `

`;