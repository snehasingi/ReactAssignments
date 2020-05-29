import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class TSkills extends Component{
    render(){    
     
        const emplist = this.props.employeeDetails.map((row, index) => {
            return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.skill}</td>
            </tr>
            )
        });
        console.log(emplist);
        return <tbody>{emplist}</tbody>;
    }
}

export default TSkills;