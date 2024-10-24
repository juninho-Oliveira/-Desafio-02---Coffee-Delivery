import styled from "styled-components"

export const Header = styled.header `

    background-color: ${({ theme }) => theme.colors.yelloDark};
    height: 50px;
    color: white;
    display: flex;
    align-items: center;
    padding:10px;
    justify-content: space-between;

    font-family: ${({ theme })=> theme.fonts.roboto};

`;