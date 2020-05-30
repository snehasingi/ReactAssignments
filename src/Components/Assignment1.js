import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import EmployeeSkills from './EmployeeSkills'
import { States, CounterFunctionalComponent } from './States';
import StaticClock from './JavaScriptFunctions/StaticClock'
import DynamicClock from './JavaScriptFunctions/DynamicClock'
import Timer from './JavaScriptFunctions/Timer'

class Assignment1 extends React.Component{
    render(){
        return(
            <React.Fragment>
                <React.Fragment>     
                    <EmployeeSkills/>
                </React.Fragment>
                <React.Fragment>
                    <States/>
                    <CounterFunctionalComponent/>
                </React.Fragment>
                <React.Fragment>
                    <StaticClock date={new Date()}/>
                    <DynamicClock date={new Date()}/>
                </React.Fragment>
                <React.Fragment>
                    <Timer/>
                </React.Fragment>
            </React.Fragment>
        )
    }
}

export default Assignment1;