import styled from "styled-components"

export const BannerContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34rem;

    &> div {
        width: 80%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .texto {
            display: flex;
            flex-direction: column;
            width: 36rem;
            gap: 4rem;
        }

        .titulo {
            &> h1 {
                color: ${({theme})=> theme.colors.baseTitle};
                font-size: 48px;
                font-family: ${({theme})=> theme.fonts.baloo};
                font-weight: bold;
            };

            &> p {
                color: ${({theme})=> theme.colors.baseSubtitle};
                font-size: 20px;
                font-family: ${({theme})=> theme.fonts.roboto};
                font-weight: 400;
            }
        }

        .items {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 35rem;
            height: 5.2rem;
            gap: 8px 10px;
        }
        
        .items > div {
            display: flex;
            align-items: center;
            gap: 12px;
            width: 17rem;

            &> span {
                display: flex;
                align-items: center;
                width: 2rem;
                height: 2rem;
                padding: 0.5rem;
                border-radius: 50%;
                border: 1px solid red;
            }

            &> p{
                    font-family: ${({theme})=> theme.fonts.roboto};
                    color: ${({theme})=> theme.colors.baseText};
                    font-weight: 500;
                    font-size: 14px;
                }
        }

        &> img {
            width: 28.5rem;
            height: 23rem;
        }
    }

`;