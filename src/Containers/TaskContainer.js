import React from 'react'
import Title from '../Components/Title'

import {
    TaskPageContainer,
    CodeText,
} from './Styles/TaskContainer'

import { useSelector } from 'react-redux'
import SectionTitle from '../Components/SectionTitle'

const TaskContainer = () => {
    const currentTaskNumber = useSelector(state => state.currentTask);
    const currentTask = useSelector(state => state.tasks[currentTaskNumber]);

    return (
        <TaskPageContainer>
            <div style={{ marginBottom: 30 }} >
                <Title
                    titleText={currentTask.name}
                    subtitleText={currentTask.description}
                    color={"#0f0f19"}
                />
            </div>
            <div style={{ marginBottom: 30 }} >
                <SectionTitle color="#0f0f19" >Example</SectionTitle>
                <CodeText>{currentTask.example}</CodeText>
            </div>
            <div>
                <SectionTitle color="#0f0f19" >Solution</SectionTitle>
            </div>

        </TaskPageContainer>
    )
}

export default TaskContainer;