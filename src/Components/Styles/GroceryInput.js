import styled from 'styled-components'

export const InputContainer = styled.div`
    display: ${props => (props.disabled? "none" : "flex")};
    margin-top: 10px;
    flex-direction: row;
    width: ${props => (props.edit? "50%" : "80%")};
    margin-left: ${props => (props.edit? "25%" : "10%")};
    height: 50px;
    background-color: ${props => (props.edit? "#b7b7ba" : "#2b2b2b")};
    border-radius: 5px;
    @media only screen and (max-width: 600px) {
        width: 100%;
        margin-left: 0px;
    }
`
export const InputField = styled.input`
    height: 100%;
    width: 95%;
    background-color: transparent;
    border-width: 0px;
    font-size: 16px;
    color: #fafafa;
    padding-left: 10px;
    padding-right: 10px;
`