import styled from "styled-components";

export const ContainerCard = styled.div `
    position: relative;
    width: 18rem;
    height: 19rem;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    background-color: ${({theme})=> theme.colors.baseCard};
    display: flex;
    justify-content: center;
    flex-direction: column;

    .conteudo {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
        align-items: center;

        &> div {
            border: 1px solid red;
            margin-top: 10px;
        }

        &> p {
            width: 13rem;
            font-size: 14px;
            font-weight: 400;
            font-family: ${({theme})=>theme.fonts.roboto};
            color: ${({theme})=> theme.colors.baseLabel};
        }

        &> h3 {
            font-size: 20px;
            font-weight: bold;
            font-family: ${({theme})=> theme.fonts.baloo};
        }

        &> div {
            border-radius: 100px;
            background-color: ${({theme})=> theme.colors.yellowLight};
            
            &>p{
                
                font-size: 10px;
                font-weight: bold;
                font-family: ${({theme})=>theme.fonts.roboto};
                padding: 4px 8px;
                color: ${({theme})=> theme.colors.yellowDark};
            }
        }
    }

    &> img {
        position: absolute;
        top: -8%;
        left: 50%;
        transform: translate(-50%);
        width: 120px;
        height: 120px;
    }
    

`;