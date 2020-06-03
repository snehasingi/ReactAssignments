import React, { Component } from 'react';
import MyPractice from './Components/MyPractice';
import FormValidation from './Components/FormExamples/FormValidation'
import SampleForm from './Components/FormExamples/SampleForm'
import Assignment1 from './Components/Assignment1'

class App extends Component {
  render(){
  return (
      <React.Fragment> 
      {/* <MyPractice/> */}
      {/* <FormValidation/> */}
      {/* <SampleForm/> */}
      <Assignment1/>
    </React.Fragment>
  );
  }
}

export default App;
