import styled from "styled-components";
import fondo from '../assets/img/fondo_aluraflix.png';


const PortadaStyle = styled.div`
    width: 100%;
    height: 300px;
    background-image: url(${fondo});
    background-size: cover;
    background-position: 50% 50%; 
    filter: brightness(50%);

    
`


const Portada = ()=>{
    return <PortadaStyle>


    </PortadaStyle>
}

export default Portada;