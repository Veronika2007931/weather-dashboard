const { default: styled } = require("styled-components");

export const SectionTitle = styled.h2`
    color: #000;

font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 40px;
`

export const NewsList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`

export const NewsItem = styled.li`
    flex-basis: 270px;
`

export const Img = styled.img`
    width: 270px;
    margin-bottom: 20px;
    border-radius: 10px;
`

export const Button = styled.button`
    display: inline-flex;
padding: 10px 30px;
justify-content: center;
align-items: center;
gap: 10px;

border-radius: 10px;
background: #FFB36C;
`

export const Text = styled.p`
    color: #000;

font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`