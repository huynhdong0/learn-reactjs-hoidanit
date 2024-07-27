import React from "react";

class UserInfor extends React.Component {
    state = {
        name : "Huynh Dong",
        age: 21,
        address: "LA",
    };

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnChangeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    handleSubmit = (event) => {
        // ignore refresh again page
        event.preventDefault();

        console.log(this.state);
    
    }

    render() {
        return (
            <div>
                <div>
                My name is:  {this.state.name}
                </div>
                <div>
                I'm {this.state.age} years old
                </div>
                <div>
                I'm from {this.state.address}
                </div>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <input type="text" value={this.state.name}
                     onChange={(event) => {this.handleOnChangeName(event)}}/>
                    <input type="text" value={this.state.age}
                    onChange={(event) => {this.handleOnChangeAge(event)}}/>
                    <input type="text" value={this.state.address}
                    onChange={(event) => {this.handleOnChangeAddress(event)}}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    };
}
export default UserInfor;