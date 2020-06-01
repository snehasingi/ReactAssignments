import React, {Component} from 'react'

class States extends Component{
    //React 16 and does not require constructor to declare state. You can directly declare it.
    // constructor(props){
    //super(props);
    state ={count : 0};
    //this.Increment = this.Increment.bind(this);
    //this.Decrement = this.Decrement.bind(this);
   // }
    
    Increment = () =>{
        this.setState({ count : this.state.count + 1});
    }

    Decrement=()=>{
        this.setState({ count : this.state.count - 1});
    }
    render()
    {
        return(
            <React.Fragment>
                <h3>Count : {this.state.count} </h3>
                <button onClick = {this.Increment}>Increment</button> 
                <button onClick = {this.Decrement}>Decrement</button>   
            </React.Fragment>
        )
    }
}

// function CounterFunctionalComponent() {
//     const [count, setCount] = React.useState(0);
//     return (
//       <React.Fragment><h2> Function Component State Mananement Using Hooks</h2> 
//       <h3>Count : {count}</h3>
//         <button onClick={() => setCount(1)}>
//           Click me to set Counter to 1!
//         </button>
//         <button onClick={() => setCount(count + 1)}>Click me to Increment the Count</button> 
//       </React.Fragment>
//     );
//   }
function CounterFunctionalComponent() {
  const [count, setCount] = React.useState(0);
  return (
    <React.Fragment> 
    <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> 
    </React.Fragment>
  );
}


    export {States,  CounterFunctionalComponent};

