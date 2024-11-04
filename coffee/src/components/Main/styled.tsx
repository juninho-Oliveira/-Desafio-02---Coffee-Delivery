import styled from 'styled-components'


export const ContainerMain = styled.main `
    display: flex;
    justify-content: center;
    background-color: ${({theme})=> theme.colors.background};
    height: 103rem;
    

    &> main {
        padding: 54px 0 54px 0;
        width: 80%;

        h1 {
            font-family: ${({theme})=> theme.fonts.baloo};
            font-size: 32px;
            margin-bottom: 56px;
        }

        .containerCardList {
            display: flex;
            text-align: center;
            flex-wrap: wrap;
            gap: 37px;
        }
    }
`;