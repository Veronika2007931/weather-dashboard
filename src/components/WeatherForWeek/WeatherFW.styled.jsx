import styled from "styled-components"

export const Container = styled.div`
    background-color: #E8E8E8;
    height: 580px;
    top: 2513px;
    gap: 0px;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 7px;

    @media screen and (min-width:${(p) => p.theme.breakpoints.mobile}){
        width: ${(p) => p.theme.breakpoints.mobile}
    }

    @media screen and (min-width:${(p) => p.theme.breakpoints.tablet}){
        width: ${(p) =>  p.theme.breakpoints.tablet}
    }

    @media screen and (min-width:${(p) => p.theme.breakpoints.desktop}){
        width: ${(p) => p.theme.breakpoints.desktop}
    }
   
`

export const List = styled.ul`
    list-style: none;
`

export const Item = styled.li`
    margin: 15px;
    background-color: #D9D9D9;
    border-radius: 10px;
    display: flex;
`

export const MainText = styled.p`
    margin-left: 58px;
`

export const SecondaryTextDate = styled.p`
    margin-left: 15px;
`

export const SecondaryTextWeather = styled.p`
    margin-left: 200px;
`

export const SecondaryTextW2 = styled.p`
    margin-left: 100px;
`



// fontSizes: {
// xs: '12px',
// s: '14px',
// m: '16px',
// l: '32px',
// xl: '64px',
// },

// export const theme = {
// colors: {
//     black: '#000',
//     white: '#fff',
//     text: '#2a2a2a',
//     background: '#fff',
//     primary: '#07c',
//     secondary: '#05a',
//     accent: '#609',
//     muted: '#f6f6f6',
//     },
//     space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
//     fonts: {
//     body: 'system-ui, sans-serif',
//     heading: 'system-ui, sans-serif',
//     monospace: 'Menlo, monospace',
//     },
//     fontSizes: {
//     xs: '12px',
//     s: '14px',
//     m: '16px',
//     l: '32px',
//     xl: '64px',
//     },
//     fontWeights: {
//     normal: 400,
//     bold: 700,
//     },
//     lineHeights: {
//     body: 1.5,
//     heading: 1.125,
//     },
//     borders: {
//     none: 'none',
//     normal: '1px solid',
//     },
//     radii: {
//     none: '0',
//     sm: '4px',
//     md: '8px',
//     lg: '16px',
//     round: '50%',
//     },
//     };