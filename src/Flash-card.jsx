import styled from 'styled-components';
import play from './assets/seta_play.png'

export default function FlashCard(){
    return(
        <>
        <FlashCardd>
            <p>Pergunta 1</p>
            <img src={play}/>
        </FlashCardd>
        <FlashCardd>
            <p>Pergunta 1</p>
            <img src={play}/>
        </FlashCardd>
        <FlashCardd>
            <p>Pergunta 1</p>
            <img src={play}/>
        </FlashCardd>
        <FlashCardd>
            <p>Pergunta 1</p>
            <img src={play}/>
        </FlashCardd>
        <FlashCardd>
            <p>Pergunta 1</p>
            <img src={play}/>
        </FlashCardd>
        <FlashCardd>
            <p>Pergunta 1</p>
            <img src={play}/>
        </FlashCardd>
        <FlashCardd>
            <p>Pergunta 1</p>
            <img src={play}/>
        </FlashCardd>
        <FlashCardd>
            <p>Pergunta 1</p>
            <img src={play}/>
        </FlashCardd>
        </>
    );
}

const FlashCardd = styled.div`
    width: 100%;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 25px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
    img{
        width: 20px;
        height: 23px;
    }
`;