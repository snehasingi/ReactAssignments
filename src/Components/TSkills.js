import React,{Component} from 'react'

class TSkills extends Component{
    state = {
        emplist : this.props.employeeDetails
    }
    componentDidMount = () => {
         this.setState({emplist : this.props.employeeDetails});
    }

    render(){    
     console.log(this.props.employeeDetails);
     this.state.emplist = this.props.employeeDetails.map((row) => {
            return(
            <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.skill}</td>
                {/* <td><button onClick={this.props.deleteItem(row.id)}>Delete</button></td> */}
            </tr>
            )
        });
        return <tbody>{this.state.emplist}</tbody>;
    }
}

export default TSkills;