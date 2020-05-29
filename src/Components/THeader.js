import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class THeader extends React.Component{
    render(){
        return(
            <div>
                <thead>
                <th><td>Employee Name</td></th>
                <th><td>Skills</td></th>
            </thead>
            </div>
        )
    }
}

export default THeader;