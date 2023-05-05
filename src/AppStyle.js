import { createGlobalStyle } from "styled-components";

const AppStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
    }

    body {
        min-width: 340px;
        min-height: 100vh;
        background-color: beige;

        h1{
            font-size: 3.1rem;
        }
        
        h2{
            font-size: 2.7rem;
        }

        h3{
            font-size: 2.4rem;
        }

        h4{
            font-size: 2.1rem;
        }

        p{
            font-size: 1.8rem;
        }
    }

`;

export default AppStyle;