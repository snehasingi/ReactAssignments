import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class THeader extends React.Component{
    render(){
        return(
            <React.Fragment>
                <th><td>Employee Name</td></th>
                <th><td>Skills</td></th>
            </React.Fragment>
        )
    }
}

export default THeader;