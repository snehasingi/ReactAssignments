import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import EmployeeSkills from './EmployeeSkills'
import { States, CounterFunctionalComponent } from './States';

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
            </React.Fragment>
        )
    }
}

export default Assignment1;