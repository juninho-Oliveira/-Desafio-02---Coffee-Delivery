import styled from "styled-components";


export const ContainerPrincipal = styled.main`
    display: flex;
    flex-direction: column;
    gap: 24px;

    .confirma {
        cursor: pointer;
        width: 23rem;
        height: 2.8rem;
        border-radius: 6px;
        align-items: center;
        padding: 8px;
        border: none;
        background-color: ${({ theme }) => theme.colors.yellow};
        color: ${({ theme }) => theme.colors.white};
        font-family: ${({ theme }) => theme.fonts.roboto};
        font-weight: bold;
    }

`;


export const ContainerValor = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;

    color: ${({ theme }) => theme.colors.baseText};
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-size: 14px;

     &> div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &> span {
        font-size: 16px;
     }

     .total {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        font-weight: bolder;
        color: ${({ theme }) => theme.colors.baseSubtitle};
     }

}

`;

