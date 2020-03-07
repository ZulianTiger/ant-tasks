import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100vw;
    min-height: 100vh;
    background-color: #0f0f19;
    @media only screen and (max-width: 1200px) {
        flex-direction: column;
    } 
`
export const ContentContainer = styled.div`
    width: 30vw;
    margin-left: 10vw;
    margin-right: 10vw;
    padding-top: 10vw;
    @media only screen and (max-width: 1280px) {
        margin-left: 100px;
    } 
    @media only screen and (max-width: 600px) {
        margin-left: 7.5vw;
        width: 85vw;
    }
`
export const TasksContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        display: table-cell;
    }
`