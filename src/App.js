import Container from './components/Container'
import Header from './components/Header';
import Welcome from './components/Welcome';
import CharacterContainer from './components/CharacterContainer';
import { useState } from 'react';

function App() {
  const [characters,setCharacters] = useState(null);

const reqApi = async() =>{
  const api = await fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=3");

  const frase = await api.json();
  // console.log(frase);
  setCharacters(frase);
}
console.log(characters);
//reqApi();

  return (
    

    <Container>
    <Header></Header>
    {/* <ContentLogo>
    <WelcomeText>Bienvenido para utilizar las frases, da click sobre la imagen</WelcomeText> 
        <ImageLogo src={logo} alt='Logo-Simpsons' />
    </ContentLogo> */}
    {!characters? (
      <Welcome reqApi={reqApi}></Welcome>
    ):(
      <CharacterContainer character={characters} reqApi={reqApi}></CharacterContainer>
    )}
   
   
    </Container>
    
  );
}

// const ImageLogo = styled.img`
//   width: 450px;
//   height: auto;


// &:hover {
//   cursor: pointer;
// }
// `;

// const ContentLogo = styled.div `
//   width: 100%;
//   text-align: center;
// `;

// const WelcomeText = styled.p`
//   color: #2a9d8f;
//   text-align: center;
//   font-weight: 900;
//   padding: 50px 0 10px 0;
//   font-size: 25px
// `;

export default App;
