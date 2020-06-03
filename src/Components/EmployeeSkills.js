import React, {Component} from 'react'
import THeader from './THeader'
import TSkills from './TSkills'
import './Css/header.css'

var employee = [
  {
   id : 1, 
   name: "Sneha",
    skill: "ReactJs"
  },
  {
    id : 2,
    name: "Ram",
    skill: "Selenium"
  }
]  
 
class EmployeeSkills extends Component{
  state = {
    employeeName : "",
    skillName : "",
    id : 2,
  }

  handleChange = (event) =>{
    switch(event.target.name){
      case "employeeName" : this.setState({employeeName : event.target.value});break;
      case "skill" : this.setState({skillName : event.target.value});break;
    }
}
  addSkill = () =>{
    //employee.push({name: this.state.employeeName, skill: this.state.skillName});
    this.setState({id : (this.state.id++)})
    //console.log(this.state.id);
    alert(this.state.id);
    console.log()
    employee = [...employee,{id: this.state.id, name: this.state.employeeName, skill: this.state.skillName}];
    console.log(employee);
  }
  deleteItem = (index) =>{
    alert("deleted item at" + index);
    //this.state.emplist.actionItems.splice(index,1);
}

    render(){
        return(
            <React.Fragment>
              <input
                     type={Text} 
                     value={this.state.employeeName} 
                     name="employeeName"
                     onChange = {this.handleChange}>
                </input>
                <input
                     type={Text} 
                     value={this.state.skillName} 
                     name="skill"
                     onChange = {this.handleChange}>
                </input>
                <button onClick={this.addSkill}> Add Skill </button>
              <table border="1">
                  <THeader/>
                  <TSkills employeeDetails = {employee}  />
              </table>
            </React.Fragment>
        )
    }
}
export default EmployeeSkills;