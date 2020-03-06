import React from 'react'
import { Link } from 'react-router-dom'

import {
    Button,
    TitleText,
    SubtitleText,
    SelectionBorder,
} from './Styles/General'

import { setCurrentTask } from '../Redux/Actions'
import { useDispatch, useSelector } from 'react-redux'

const TaskButton = (props) => {
    const currentTaskNumber = useSelector(state => state.currentTask);
    const currentTask = useSelector(state => state.tasks[currentTaskNumber]);
    const dispatch = useDispatch();

    let borderColor;
    if (currentTaskNumber === parseInt(props.path))
        borderColor = currentTask.color;
    else
        borderColor = "#0f0f19";

    return (
        <SelectionBorder borderColor={borderColor} >
            <Button color={props.color} >
                <Link
                    style={{
                        textDecoration: "none",
                        width: "100%",
                        display: "block",
                        textAlign: "center",
                        paddingTop: 53.5,
                        paddingBottom: 53.5,
                    }}
                    to={'/' + props.path}
                    onClick={() => {
                        dispatch(setCurrentTask(parseInt(props.path)));
                    }}
                >
                    <TitleText>{props.shortName}</TitleText>
                </Link>
                <SubtitleText alignment="center">
                    {props.name}
                </SubtitleText>
            </Button>
        </SelectionBorder>
    )
}

export default TaskButton;