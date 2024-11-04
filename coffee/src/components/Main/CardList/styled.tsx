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
        justify-content: space-between;
        flex-direction: column;
        gap: 5px;
        align-items: center;

        &> section {
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;

            &> p {
                font-size: 24px;
                font-weight: bolder;
                font-family: ${({theme})=> theme.fonts.baloo};
                color: ${({theme})=> theme.colors.baseText};


                &> span {
                    font-size: 14px;
                    font-weight: 400;
                    font-family: ${({theme})=> theme.fonts.roboto};
                }
            }

            &> div {
                display: flex;
                gap: 8px;

                .botao {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    font-size: 16px;
                    font-weight: 400;
                    font-family: ${({theme})=> theme.fonts.roboto};
                    color: ${({theme})=> theme.colors.baseTitle};

                    background-color: ${({theme})=> theme.colors.baseButton};
                    border-radius: 6px;

                    padding: 8px;
                    width: 72px;

                    &> button {
                        border: none;
                        font-size: 24px;
                        color: ${({theme})=> theme.colors.purple};
                        background-color: ${({theme})=> theme.colors.baseButton};
                    }

                }
                
                &> button {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    border-radius: 6px;
                    color: ${({theme})=> theme.colors.white};
                    padding: 8px;
                    background-color: ${({theme})=> theme.colors.purpleDark};
                }
            }
        }

        &> .containerConteudo {
            display: flex;
            justify-content: center;
            gap: 10px;
            width: auto;
            margin-top: 100px;

            &> div {
            border-radius: 100px;
            background-color: ${({theme})=> theme.colors.yellowLight};
            
            &>p{  
                text-transform: uppercase;
                font-size: 10px;
                font-weight: bold;
                font-family: ${({theme})=>theme.fonts.roboto};
                padding: 4px 8px;
                color: ${({theme})=> theme.colors.yellowDark};
            }
        }
        }

        &> p {
            width: 13rem;
            font-size: 14px;
            font-weight: 400;
            font-family: ${({theme})=>theme.fonts.roboto};
            color: ${({theme})=> theme.colors.baseLabel};
        }

        &> h3 {
            margin-top: 10px;
            font-size: 20px;
            font-weight: bold;
            font-family: ${({theme})=> theme.fonts.baloo};
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