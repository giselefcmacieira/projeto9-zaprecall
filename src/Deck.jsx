import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import FlashContainer from './Flash-container';
import cards from './infoDeck';

export default function Deck(){
    return(
        <Deckk>
            <Header/>
            <FlashContainer/>
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



