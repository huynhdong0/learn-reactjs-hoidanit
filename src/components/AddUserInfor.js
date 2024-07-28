import React from "react";
class AddUserInfor extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name : "Huynh Dong",
            age: 21,
            address: "LA",
        };
    }

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

    // handleSubmit = (event) => {
    //     // ignore refresh again page
    //     event.preventDefault();
    //     console.log(this.state);
    
    // }

    handleAddNewUser = (event) => {
        // ignore refresh again page
        event.preventDefault();
        this.props.handleAddNewUser(
            {   id: Math.floor((Math.random()*100)+1) +'-random',
                name: this.state.name,
                age: this.state.age,
                address: this.state.address
            }
        )
    }

    render() { 
        return (
            <div className="user-container">
                <form onSubmit={(event) => {this.handleAddNewUser(event)}}>
                    <input type="text" placeholder="Huynh Dong"
                     onChange={(event) => {this.handleOnChangeName(event)}}/>
                    <input type="text" placeholder="21"
                    onChange={(event) => {this.handleOnChangeAge(event)}}/>
                    <input type="text" placeholder="LA"
                    onChange={(event) => {this.handleOnChangeAddress(event)}}/>
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        )
    };
}
export default AddUserInfor;