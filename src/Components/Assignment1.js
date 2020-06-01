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
                <h1 align="center"> Assignments</h1>
                <table align="center">
                    <tr>
                        <td><h3>1. Employee Details </h3></td><td align="right"><EmployeeSkills/></td>
                    </tr>
                    <tr>
                        <td><h3>2. Class Component State Management Using Constructor</h3></td><td align="right"> <States/></td>
                    </tr>
                    <tr>
                        <td><h3>3. Function Component State Mananement Using Hooks</h3></td><td align="right"><CounterFunctionalComponent/></td>
                    </tr>
                    <tr>
                        <td><h3>4. Using JavaScript Functions</h3></td><td align="right"><StaticClock date={new Date()}/></td>
                    </tr>
                    <tr>
                        <td><h3>5. Using JavaScript Functions</h3></td><td align="right"><DynamicClock date={new Date()}/></td>
                    </tr>
                    <tr>
                        <td><h3>6. Timer</h3></td><td align="right"><Timer/></td>
                    </tr>
                    <tr>
                        <td><h3>7. Addition / Concatenation</h3></td><td align="right"><ShowAddition/></td>
                    </tr>
                    </table>
            </React.Fragment>
        )
    }
}

export default Assignment1;