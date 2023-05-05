import Styled from "styled-components";

const CarruselContainer = Styled.div`
  margin-top: 1rem;


`;

const CarruselStyle = Styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-content: center;
  column-gap: 20px;
  overflow-x: scroll; 
`
const VideoStyle = Styled.div`
  width: 280px;
  height: auto; 
  background-color: red;
`
  

const Carrusel = ()=>{
  return (
    <CarruselContainer>
      <button>
        Categoria
      </button> 
      <p>Descipción de la categoría</p>
      <CarruselStyle>
        <VideoStyle>
          <iframe 
            width="280" 
            height="auto" 
            src="https://www.youtube.com/embed/QUvVdTlA23w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </VideoStyle>

        <VideoStyle>
          <iframe 
            width="280" 
            height="auto" 
            src="https://www.youtube.com/embed/QUvVdTlA23w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </VideoStyle>

        <VideoStyle>
          <iframe 
            width="280" 
            height="auto" 
            src="https://www.youtube.com/embed/QUvVdTlA23w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </VideoStyle>
      </CarruselStyle>
    </CarruselContainer>
  
  )
}

export default Carrusel;