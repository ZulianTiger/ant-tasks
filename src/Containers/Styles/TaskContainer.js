import styled from 'styled-components'

export const TaskPageContainer = styled.div`
    background-color: #fafafa;
    border-radius: 15px;
    margin: 15px 15px 15px 0px;
    width: calc(50vw - 215px);
    min-height: calc(100vh - 230px);
    padding: 75px;
    @media only screen and (max-width: 1280px) {
        margin-left: 150px;
        padding: 25px;
    }
    @media only screen and (max-width: 1200px) {
        width: 80vw;
        margin: 50px 10vw 50px 7.5vw;
    }
    @media only screen and (max-width: 600px) {
        width: 80vw;
        margin: 0px;
        margin-left: 10px;
        margin-top: 30px;
    }
`
export const CodeText = styled.pre`
    white-space: pre-wrap;
    word-break: break-all;
`