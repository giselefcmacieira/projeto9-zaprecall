import styled from 'styled-components';
import FlashCard from './Flash-card';

export default function FlashContainer(){
    return(
        <ContainerCards>
            <FlashCard/>
        </ContainerCards>
    );
}

const ContainerCards = styled.div`
    width: 100%;
    margin-top: 145px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 0 37px 0 37px;
`;