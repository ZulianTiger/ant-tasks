import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Title from '../Components/Title'
import TaskContainer from './TaskContainer'
import SectionTitle from '../Components/SectionTitle'
import TaskButton from '../Components/TaskButton'

import {
    PageContainer,
    ContentContainer,
    TasksContainer,
} from './Styles/General'

export default class BackgroundContainer extends Component {

    render() {
        return (
            <PageContainer>
                <Router>
                    <ContentContainer>
                        <div style={{ marginBottom: 50 }} >
                            <Title
                                titleText="Hi Ant Colony"
                                subtitleText="My name is Armin, and it's a pleasure to meet you!"
                                color="#fafafa"
                            />
                        </div>
                        <SectionTitle>Tasks (3)</SectionTitle>
                        <TasksContainer>
                            <TaskButton path="1" name="Object Lookup" shortName="OL" color="#ffc03a" />
                            <TaskButton path="2" name="Grocery List" shortName="GL" color="#e36397" />
                            <TaskButton path="3" name="New Struct" shortName="NS" color="#731dd8" />
                        </TasksContainer>
                    </ContentContainer>

                    <Switch>
                        <Route exact path='/' />
                        <Route exact path='/1' component={TaskContainer} />
                        <Route exact path='/2' component={TaskContainer} />
                        <Route exact path='/3' component={TaskContainer} />
                    </Switch>
                </Router>

            </PageContainer>
        )
    }
}