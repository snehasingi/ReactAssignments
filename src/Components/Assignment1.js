import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import EmployeeSkills from './EmployeeSkills'
import { States, CounterFunctionalComponent } from './States';
import StaticClock from './JavaScriptFunctions/StaticClock'
import DynamicClock from './JavaScriptFunctions/DynamicClock'
import Timer from './JavaScriptFunctions/Timer'
import {ShowAddition} from './ShowAddition'

class Assignment1 extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1 align="center"> Assignment - 1</h1>
                <table align="center">
                    <tbody>
                    <tr>
                        <td><h3>1. Extend the Dynamic Clock example using a start and stop button which helps us control the clock </h3></td><td align="right"><DynamicClock date={new Date()}/></td>
                    </tr><br></br>
                    <tr>
                        <td><h3>2.  Create 2 text boxes and set initial values. As soon as there is a change in the text values , calculate the sum of the values</h3></td><td align="right"><ShowAddition/></td>
                    </tr><br></br><br></br>
                    <tr>
                        <td><h3>3. Add a new Skill and Employee in the project to include new skills and Employees dynamically through form elements </h3></td><td align="right"><EmployeeSkills/></td>
                    </tr>
                    </tbody>
                    </table>
            </React.Fragment>
        )
    }
}

export default Assignment1;