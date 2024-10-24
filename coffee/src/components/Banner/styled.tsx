import styled, { css } from "styled-components"
import backgroundImage from "../../assets/intro-background.png";

export type SpanVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface SpanProps {
    variant: SpanVariant;
}

const SpanVariants = {
    primary: 'yellowDark',
    secondary: 'baseText',
    danger: 'yellow',
    success: 'purple',
};

export const SpanContainer = styled.span<SpanProps> `

        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.2rem;
        height: 2.2rem;
        padding: 0.5rem;
        border-radius: 50%;
        color: ${({ theme }) => theme.colors.white};
        ${props => {
        const bgColor = SpanVariants[props.variant];
        return css`
            background-color: ${({ theme }) => theme.colors[bgColor]};
        `;
    }}

`;

export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34rem;
    background-image: url(${backgroundImage});


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
                color: ${({ theme }) => theme.colors.baseTitle};
                font-size: 48px;
                font-family: ${({ theme }) => theme.fonts.baloo};
                font-weight: bold;
            };

            &> p {
                color: ${({ theme }) => theme.colors.baseSubtitle};
                font-size: 20px;
                font-family: ${({ theme }) => theme.fonts.roboto};
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


            &> p{
                    font-family: ${({ theme }) => theme.fonts.roboto};
                    color: ${({ theme }) => theme.colors.baseText};
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