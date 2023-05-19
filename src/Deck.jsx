import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import FlashContainer from './Flash-container';
import cards from './infoDeck';
import { useState } from 'react';

export default function Deck(){
    const [play, setPlay] = useState(false);
    return(
        <Deckk>
            <Header/>
            <FlashContainer cards={cards} 
            play={play} setPlay={setPlay}
            />
            <Footer/>
        </Deckk>
    );
}

const Deckk = styled.div`
    width: 100%;
    height: 100%;
    background: #FB6B6B;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;



