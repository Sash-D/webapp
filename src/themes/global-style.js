import { createGlobalStyle } from 'styled-components'
import reset from './reset'
import variables from './variables'
import screen from './screens'

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${variables}
    
    * {
        &, &::before, &::after {
            box-sizing: border-box;
        }
    }
    html {
        font-size: 62.5%; /* 1rem = 10px */
        height: 100%;
    }
    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.6rem;
        margin: 0;
        padding: 0;

        @media ${screen.lg} {
            font-size: 1.4rem;
        }
    }
`

export default GlobalStyle
