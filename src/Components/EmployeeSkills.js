import React, {Component} from 'react'
import THeader from './THeader'
import TSkills from './TSkills'
import './Css/header.css'

const employee = [
  {
   name: "Sneha",
    skill: "ReactJs"
  },
  {
    name: "Ram",
    skill: "Selenium"
  }
]  
 
class EmployeeSkills extends Component{
    
    render(){
        return(
            <React.Fragment>
              <table border="1">
                  <THeader/>
                  <TSkills employeeDetails = {employee}  />
              </table>
            </React.Fragment>
        )

    }
    
}
export default EmployeeSkills;