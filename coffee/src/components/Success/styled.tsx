import styled, { css } from "styled-components";

export type SpanVariant = 'primary' | 'secondary' | 'danger'

interface SpanProps {
    variant: SpanVariant;
}

const SpanVariants = {
    primary: 'purple',
    secondary: 'yellow',
    danger: 'yellowDark',
};


export const ContainerSuccess = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    width: 80%;

`;


export const ContainerEntrega = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 40px;

`;

export const SectionSuccess = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    &> h1 {
        font-family: ${({ theme }) => theme.fonts.baloo};
        color: ${({ theme }) => theme.colors.yellowDark};
        font-weight: bold;
        font-size: 32px;
    }

    &> p {
        font-family: ${({ theme }) => theme.fonts.roboto};
        color: ${({ theme }) => theme.colors.baseSubtitle};
        font-weight: 400;
        font-size: 20px;
    }
`;

export const CardEntrega = styled.div`
    position: relative;
    padding: 40px;
    width: 32.8rem;
    height: 16.8rem;
    border-radius: 5px 36px 5px 36px;
    background-color: ${({ theme }) => theme.colors.baseCard};
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: inherit;
    background: linear-gradient(90deg, #FFB800, #8D4CD1);
    z-index: -1;
  }

    &> div {
        display: flex;
        gap: 12px;
        align-items: center;  

        &> p {
            color: ${({ theme }) => theme.colors.baseText};
            font-size: 16px;
            font-family: ${({ theme }) => theme.fonts.roboto};
            font-weight: 400;
        }
        
    }
`;


export const DivInfo = styled.div`

        &> P {
            display: flex;
            flex-direction: column;
        }
`;

export const SpanIcone = styled.span<SpanProps> `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 32px;
    height: 32px;
    border-radius: 100%;
        color: ${({ theme }) => theme.colors.white};
        ${props => {
        const bgColor = SpanVariants[props.variant];
        return css`
            background-color: ${({ theme }) => theme.colors[bgColor]};
        `;
    }}

    
`;