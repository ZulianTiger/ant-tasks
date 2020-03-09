import styled from 'styled-components'

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    margin-left: 10%;
    margin-top: 10px;
    min-height: 50px;
    background-color: #2b2b2b;
    border-radius: 5px;
    @media only screen and (max-width: 600px) {
        width: 100%;
        margin-left: 0px;
    }
`
export const ItemTextContainer = styled.div`
    height: 100%;
    width: 90%;
    padding-left: 10px;
    padding-right: 10px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
`
export const ItemText = styled.p`
    margin: 14.5px 0px;
    padding: 0px;
    font-size: 16px;
    color: #fafafa;
`
