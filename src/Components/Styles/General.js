import styled from 'styled-components'

export const TitleText = styled.h1`
    margin: 0px;
    padding: 0px;
    color: ${props => (props.color? props.color : "#fff")};
`
export const SubtitleText = styled.p`
    margin: 0px;
    padding: 0px;
    text-align: ${props => (props.alignment? props.alignment : "left")};
    color: ${props => (props.color? props.color : "#fff")};
    margin-top: 5px;
`
export const SectionTitleText = styled.h3`
    margin: 0px;
    padding: 0px;
    color: ${props => (props.color? props.color : "#fff")};
`

export const Button = styled.div`
    background-color: ${props => (props.color)};
    width: 150px;
    height: 150px;
    border-radius: 30px;
    border: solid 4px #0f0f19;
    @media only screen and (max-width: 600px) {
        margin-bottom: 30px;
        width: 85vw;
    }
`
export const SelectionBorder = styled.div`
    border: solid 2px ${props => props.borderColor};
    border-radius: 30px;
`
