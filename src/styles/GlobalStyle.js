import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * { 
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    text-decoration: none;
  }
  
`;

export default GlobalStyle;
