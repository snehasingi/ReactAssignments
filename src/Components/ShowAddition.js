import React,  { useState } from 'react';

class ShowAddition extends React.Component{
    state = {
        text1Value : "",
        text2Value : "",
        result : ""
    }
    getValue = (event) =>{
        if(event.target.name === "text1"){
            this.setState({text1Value : event.target.value.trim()})
        }else if(event.target.name === "text2"){
          this.setState({text2Value : event.target.value.trim()})
      }
    }

    showAddition = () =>{
      var text1 = this.state.text1Value;
      var text2  = this.state.text2Value;   
      console.log(typeof text1);  
     //if(typeof text1 ==='undefined' || typeof text2 === 'undefined')
          this.setState({ result : text1 + text2});
          //this.setState({ result : parseInt(text1) + parseInt(text2)});
      return this.state.result;
    }
    render(){
        return(
            <React.Fragment>
                <input
                     type={Text} 
                     value={this.state.tex1tValue} 
                     name="text1"
                     onChange={this.getValue}>
                </input>
                +
                <input
                     type={Text} 
                     value={this.state.text2Value} 
                     name="text2"
                     onChange={this.getValue}>
                </input>
                
                <button onClick={this.showAddition}> Add </button>
          
                <h3>{this.state.result}</h3>
            </React.Fragment>
        )
    }
}

// const Message = () => {
//     const [message, setMessage] = useState("");
  
//     return (
//       <div>
//         <input
//           type="text"
//           value={message}
//           placeholder="Enter a message"
//           onChange={e => setMessage(e.target.value)}
//         />
//         <p>
//           <strong>{message}</strong>
//         </p>
//       </div>
//     );
//   };

export {ShowAddition};