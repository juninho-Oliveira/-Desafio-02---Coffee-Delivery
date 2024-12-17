import styled from "styled-components";

export const ContainerCardPagamento = styled.section`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    gap: 20px;
    width: 23rem;
    height: 5rem;
    
    border-bottom: 2px solid ${({ theme }) => theme.colors.baseButton};
    width: 100%;

    &> img{
        width: 64px;
        height: 64px;
    }

    &> div {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 8px;

        &> p {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            font-size: 16px;
            font-weight: 400;
            font-family: ${({ theme }) => theme.fonts.roboto};
            color: ${({ theme }) => theme.colors.baseSubtitle}; 
            
            &> span {
                font-size: 16px;
                font-weight: bold;
                color: ${({ theme }) => theme.colors.baseTitle};             
            }
        }
    }

    .botao {
           
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 16px;
        font-weight: 400;
        font-family: ${({ theme }) => theme.fonts.roboto};
        color: ${({ theme }) => theme.colors.baseTitle};

        background-color: ${({ theme }) => theme.colors.baseButton};
        border-radius: 6px;

        padding: 8px;
        width: 4.5rem;
        height: 2rem;

        &> button {   
            border: none;
            font-size: 24px;
            color: ${({ theme }) => theme.colors.purple};
            background-color: ${({ theme }) => theme.colors.baseButton};
        
        }
    
    }

    .deletar {

        width: 5.6rem;

        &> button {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2px;
            font-size: 12px;
            cursor: pointer;

            &> span {
                color: ${({ theme }) => theme.colors.baseText} ;
            }
        }
        
        
    }

    .botoes {
        display: flex;
        gap: 8px;
    }
`;