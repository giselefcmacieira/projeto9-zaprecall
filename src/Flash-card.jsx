import styled from 'styled-components';
import playimg from './assets/seta_play.png';
import virar from './assets/seta_virar.png';
import certo from './assets/icone_certo.png';
import quase from './assets/icone_quase.png';
import erro from './assets/icone_erro.png';
import { useState } from 'react';

export default function FlashCard(props){
    const {card, concluidas, setConcluidas} = props;

    const [apertouPlay, setAperouPlay] = useState(false);

    const [apertouVirarCarta, setApertouVirarCarta] = useState(false);

    const [concluiu, setConcluiu] = useState(false);

    const [esqueceu, setEsqueceu] = useState(false);

    const [quaseEsqueceu, setQuaseEsqueceu] = useState(false);

    const [lembrou, setLembrou] = useState(false);


    function darPlay(){
        setAperouPlay(true);
    }

    function virarCarta(){
        setApertouVirarCarta(true);
    }

    function naoLembrou(id){
        setConcluiu(true); 
        setEsqueceu(true);
        const novaArray = [...concluidas];
        novaArray.push(id);
        setConcluidas(novaArray);
    }

    function quaseEsqueceuu(id){
        setConcluiu(true); 
        setQuaseEsqueceu(true);
        const novaArray = [...concluidas];
        novaArray.push(id);
        setConcluidas(novaArray);
    }

    function lembrouu(id){
        setConcluiu(true); 
        setLembrou(true);
        const novaArray = [...concluidas];
        novaArray.push(id);
        setConcluidas(novaArray);
    }

    return(
        <>
        {concluiu ? 
        <FlashCardFinalizado esqueceu={esqueceu} quaseEsqueceu={quaseEsqueceu} lembrou={lembrou}>
            <p>Pergunta {card.id}</p>
            <ul>
                <li>Pergunta {card.id}</li>
            </ul>
            {esqueceu ? <img src={erro}/> : <img src={lembrou ? `${certo}` : `${quase}`} /> }
        </FlashCardFinalizado> : 
        <FlashCardd apertouPlay = {apertouPlay} apertouVirarCarta={apertouVirarCarta}>
            <p>{ apertouPlay ? `${card.question}` : `Pergunta ${card.id}`}</p>
            <ul>
                <li>{ apertouVirarCarta ? `${card.answer}` : ''}</li>
            </ul>
            {apertouPlay ? <img onClick={virarCarta} src={virar}/> : <img onClick={darPlay} src={playimg} /> }
            <div>
                <BotaoNaoLembrei onClick={() => naoLembrou(card.id)}>Não Lembrei</BotaoNaoLembrei>
                <BotaoQuaseNaoLembrei onClick={() => quaseEsqueceuu(card.id)}>Quase não lembrei</BotaoQuaseNaoLembrei>
                <Zap onClick={() => lembrouu(card.id)}>Zap!</Zap>
            </div>
        </FlashCardd>}
        </>
    );
}

const FlashCardd = styled.div`
    width: 100%;
    height: ${props => props.apertouPlay ? '131px' : '65px'};
    background: ${props => props.apertouPlay ? '#FFFFD4' : '#FFFFFF'};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 22px 15px 15px 15px;
    margin-bottom: 25px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
        display: ${props => props.apertouVirarCarta ? 'none' : ''}
    }
    img{
        width: 20px;
        height: 23px;
        position: ${props => props.apertouPlay ? 'absolute' : 'none'};
        bottom: 6px;
        right: 15px;
        display: ${props => props.apertouVirarCarta ? 'none' : ''};
    }
    div{
        display: ${props => props.apertouVirarCarta ? 'flex' : 'none'};
        justify-content: space-around;
        position: absolute;
        bottom: 10px;
        left: 0px;
        height: 37px;
        width: 100%;
    }
    ul{
        text-decoration: none;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`;

const FlashCardFinalizado = styled.div`
    width: 100%;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 22px 15px 15px 15px;
    margin-bottom: 25px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    p{
        color: ${props => props.lembrou ? '#2FBE34' : '#FF922E'};
        text-decoration: line-through;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        display: ${props => props.esqueceu ? 'none' : ''};
    }
    ul{
        text-decoration: line-through;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: red;
        display: ${props => props.esqueceu ? '' : 'none'}
    }
`;


const BotaoNaoLembrei = styled.button`
    width: 85px;
    height: 37px;
    background-color: #FF3030;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    border:none;
    border-radius: 5px;
`
const BotaoQuaseNaoLembrei = styled.button`
    width: 85px;
    height: 37px;
    background-color: #FF922E;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    border:none;
    border-radius: 5px;
`
const Zap = styled.button`
    width: 85px;
    height: 37px;
    background-color: #2FBE34;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    border:none;
    border-radius: 5px;
`