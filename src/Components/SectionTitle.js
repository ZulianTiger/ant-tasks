import React from 'react'

import {
    SectionTitleText
} from './Styles/General'

const SectionTitle = (props) => {
    return(
        <SectionTitleText color={props.color} >
            {props.children}
        </SectionTitleText>
    )
}

export default SectionTitle;