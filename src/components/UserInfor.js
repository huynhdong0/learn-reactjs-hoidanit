import React from "react";
import DisplayInfor from "./DisplayInfor";
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
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <input type="text" placeholder="Huynh Dong"
                     onChange={(event) => {this.handleOnChangeName(event)}}/>
                    <input type="text" placeholder="21"
                    onChange={(event) => {this.handleOnChangeAge(event)}}/>
                    <input type="text" placeholder="LA"
                    onChange={(event) => {this.handleOnChangeAddress(event)}}/>
                    <button>
                        Submit
                    </button>
                    <hr/>
                    <DisplayInfor name = {this.state.name} age = {this.state.age} address = {this.state.address}/>
                </form>
            </div>
        )
    };
}
export default UserInfor;