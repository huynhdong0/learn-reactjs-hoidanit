import React from "react";

class MyComponent extends React.Component {

    names = ['HD', 'Huynh Dong', 'Van Dong', 'Dong', 'Dong Huynh'];
    state = {
        name : "Huynh Dong",
        age: 21,
        address: "LA",
      };

    handleClick() {
        console.log('>> Click me by button')
        console.log(`My name is ${this.state.name}`)

        this.setState({
            name: this.names[(Math.floor(Math.random()*3)+1)],
            age: Math.floor((Math.random() * 100) +1)
        })
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
                <button onClick={(event) => {this.handleClick(event)}}> Click me</button>
            </div>
        );
    };
}

export default MyComponent; 