import React,  { useState } from 'react';

class ShowAddition extends React.Component{
    state = {
        text1Value : "50",
        text2Value : "30",
        result : ""
    }
    getValue = (event) =>{
        if(event.target.name === "text1"){
            this.setState({text1Value : event.target.value})
        }else if(event.target.name === "text2"){
          this.setState({text2Value : event.target.value})
        }
      //update state asynchronosly
      this.setState(state=>({result : parseFloat(state.text1Value) + parseFloat(state.text2Value)}))
    }

    showAddition = () =>{ 
      this.setState({ result : parseFloat(this.state.text1Value) + parseFloat(this.state.text2Value)});
    }

    componentDidMount= () =>{
        this.showAddition();
    }
    render(){
        return(
            <React.Fragment>
                <input
                     type="text"
                     value={this.state.text1Value} 
                     name="text1"
                     onChange={this.getValue}>
                </input>
                +
                <input
                     type="text" 
                     value={this.state.text2Value} 
                     name="text2"
                     onChange={this.getValue}>
                </input>
                
                <button onClick={this.showAddition}> Add </button>
          
                <h3>Addition : {this.state.result}</h3>
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