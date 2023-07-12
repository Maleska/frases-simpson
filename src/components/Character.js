import styled from 'styled-components'


export default function Character(props) {
    const {dataCharacter} = props;
    const {Character,image, quote} = dataCharacter;

    console.log(dataCharacter);
    return (
    <ContentCharacter>
        <Title> {Character}</Title>
        <ContainerImage>
            <Image src={image} alt={Character}/>
        </ContainerImage>
        <PraseText>{quote}</PraseText>
    </ContentCharacter>
    )
}

const ContentCharacter = styled.div`
    padding: 20px;
    border: 1px solid #2a9d8f;
    border-radius: 20px;
    width: 300 px;
    text-align: center;

    &:hover{
        
        filter: brightness(40%);
    }
`;

const Title = styled.h2`
    color: #264653;
    height: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const ContainerImage = styled.div`
    height: 250px;
    display:flex;
    align-items:center;
    justify-content: center;
`;

const Image = styled.img`
    width: 130px;
    height: auto;
    margin-right :20px;
`;

const PraseText = styled.h4`
    color: #209d8f;
    height: 100px;
`;