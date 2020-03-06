import React from 'react'
import {
    TitleText,
    SubtitleText,
} from './Styles/General'

const Title = (props) => {
    return (
        <React.Fragment>
            <TitleText color={props.color} >{props.titleText}</TitleText>
            <SubtitleText color={props.color}>{props.subtitleText}</SubtitleText>
        </React.Fragment>
    )
}

export default Title;