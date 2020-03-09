import React from 'react'
import Title from '../Components/Title'

import {
    TaskPageContainer,
    CodeText,
} from './Styles/TaskContainer'

import { useSelector } from 'react-redux'
import SectionTitle from '../Components/SectionTitle'
import ObjectLookupTask from '../Components/ObjectLookupTask'
import GroceryListContainer from '../Containers/GroceryListContainer'

const TaskContainer = () => {
    const currentTaskNumber = useSelector(state => state.currentTask);
    const currentTask = useSelector(state => state.tasks[currentTaskNumber]);

    let solutionComponent = (<div></div>);

    if (currentTaskNumber === 1) 
        solutionComponent = (<ObjectLookupTask />);
    else if (currentTaskNumber === 2)
        solutionComponent = (<GroceryListContainer />);
    else if (currentTaskNumber === 3)
        solutionComponent = (<p>SOLUTION 3</p>);

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
                <a style={{textDecoration: "none"}} target="_none" href={currentTask.github}>
                    <i className="fab fa-github" style={{color: "#0f0f19", fontSize: 16, marginTop: 15}}></i>
                    <span style={{ color: "blue", marginLeft: 5 }}>View on github</span>
                </a>   
                <CodeText>{currentTask.solution}</CodeText>
                <SectionTitle color="#0f0f19" >Test</SectionTitle>
                { solutionComponent }
            </div>

        </TaskPageContainer>
    )
}

export default TaskContainer;