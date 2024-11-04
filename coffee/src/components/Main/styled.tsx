import styled from 'styled-components'


export const ContainerMain = styled.main `
    display: flex;
    justify-content: center;
    background-color: ${({theme})=> theme.colors.background};
    height: auto;
    

    &> main {
        padding: 54px 0 54px 0;
        width: 80%;

        &> section {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

        h1 {
            font-family: ${({theme})=> theme.fonts.baloo};
            font-size: 32px;
            margin-bottom: 56px;
        }

        .containerCardList {
            /* border: 1px solid red; */
            width: 100%;
            display: flex;
            text-align: center;
            flex-wrap: wrap;
            gap: 20px;
        }
    }
`;