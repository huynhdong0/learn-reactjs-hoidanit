import React from "react";

class MyComponent extends React.Component {

    state = {
        name : "Huynh Dong",
        age: 21,
        address: "LA",
      };

    handleClick() {
        console.log('>> Click me by button')
    }

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
    
            <button onClick={this.handleClick}> Click me</button>
          </div>
        );
    }
}

export default MyComponent;