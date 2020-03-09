import React from 'react'

import {
    SectionTitleText
} from './Styles/General'

const SectionTitle = (props) => {
    return(
        <SectionTitleText color={props.color} size={props.size} alignment={props.alignment} >
            {props.children}
        </SectionTitleText>
    )
}

export default SectionTitle;