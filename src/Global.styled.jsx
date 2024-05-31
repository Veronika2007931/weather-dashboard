
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  
  body {
  margin: 0;
  font-family: "Montserrat", 
  sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p,
  h1,
  h2,
  h3,
  ul,
  a{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none

  }
  button{
    border: none;
  }

  
    
`