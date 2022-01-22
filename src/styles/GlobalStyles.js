import {createGlobalStyle} from "styled-components";
import colors from "./colors";

export default createGlobalStyle`
    body, html {
      margin: 0;
      padding: 0;
      background: linear-gradient(180deg, #F3F3FB 0%, #FDFBFD 100%);
      box-sizing: border-box;
    }
  
    * {
      margin: 0;
      padding: 0;
    }
  
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    
    p {
      margin: 0;
    } 
    .main{
      display: flex;
    }
`

