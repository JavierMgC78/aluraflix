import aluraflix from '../assets/img/Aluraflix.png';
import styled from "styled-components";


const HeaderStyle = styled.header`
    width: 100%;
    height: 50px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: auto;
        height: 40px;
    }
`;


const Header = () =>{
    return (
        <>
        <HeaderStyle>
            <img src={aluraflix} alt="Logo"/>
        </HeaderStyle>
        </>
    )
}

export default Header;