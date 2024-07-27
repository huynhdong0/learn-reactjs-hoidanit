import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyCompoent';
import React from 'react';

class App extends React.Component {
  state = {
    name : "Huynh Dong",
    age: 21,
    address: "LA",
  };


  render() {
    return (
      <div>
        <div>
          My name is {this.state.name}
        </div>
        <div>
          I'm {this.state.age} years old
        </div>
        <div>
          I'm from {this.state.address}
        </div>
      </div>
    )
  };
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
