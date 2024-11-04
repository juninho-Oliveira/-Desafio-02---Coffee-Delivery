import styled from "styled-components"

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    background-color: ${({theme})=> theme.colors.background};

    & > nav {
        width: 80%;
        height: 6.5rem;
        color: white;
        display: flex;
        align-items: center;
        padding:10px;
        justify-content: space-between;

        &> div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 14rem;
            height: 2.3rem;

            .map {
                display: flex;
                align-items: center;
                text-align: center;
                justify-content: center;
                gap: 2px;
                padding: 8px;

                font-size: 12px;
                font-family: ${({theme})=> theme.fonts.roboto};
                color: ${({theme})=> theme.colors.purpleDark};
                width: auto;
                height: 100%;
                border-radius: 6px;
                background-color: ${({theme})=> theme.colors.purpleLight};

            }

            .carrinho {
                cursor: pointer;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 2.3rem;
                height: 2.3rem;
                background-color: ${({theme})=> theme.colors.yellowLight};
                border-radius: 6px;
                color: ${({theme})=> theme.colors.yellowDark};
            }
        }
    };

    
`;