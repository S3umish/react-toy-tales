
// import logo from './logo.svg';
import React from 'react'
import './App.css';
import ToysContainer from './ToysContainer'

function App() {
  return (
    <div className="App">
      <h1>React Toy Tale</h1>
      <ToysContainer />
    </div>
  );
}

// import React from 'react';
// import './App.css';

// import Header from './components/Header'
// import ToyForm from './components/ToyForm'
// import ToyContainer from './components/ToyContainer'


// class App extends React.Component{

//   state = {
//     display: false
//   }

//   handleClick = () => {
//     let newBoolean = !this.state.display
//     this.setState({
//       display: newBoolean
//     })
//   }

//   render(){
//     return (
//       <>
//         <Header/>
//         { this.state.display
//             ?
//           <ToyForm/>
//             :
//           null
//         }
//         <div className="buttonContainer">
//           <button onClick={this.handleClick}> Add a Toy </button>
//         </div>
//         <ToyContainer/>
//       </>
//     );
//   }

// }

export default App;
