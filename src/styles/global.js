import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html{
    font-size: 10px;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body{
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
    color: #2A2A2A;
    width: 100vw;
    max-width: 100%;
    background-color: #1f2d40;
    color:#f5f5f5;
    font-family: 'Lobster Two', cursive;

    /* font-family: 'Roboto', sans-serif; */
  }

  a{
    text-decoration: none;
    color: inherit;
  }
  
  input, button{
    border: none;
  }

  button{
    cursor: pointer;
  }
  `;
