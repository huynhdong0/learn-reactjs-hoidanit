import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    
    state = {
        listUsers: [
            {id: 1, name: 'D_1', age: '21', address: 'LA'},
            {id: 2, name: 'D_2', age: '32', address: 'LA'},
            {id: 3, name: 'D_3', age: '16', address: 'LA'}
        ]
    };

    handleAddNewUser = (user) => {
        console.log(user);
        this.setState({
            listUsers: [user, ...this.state.listUsers]
        })
    }

    render() {  
        return (
            <>
                <AddUserInfor handleAddNewUser = {this.handleAddNewUser}/>
                <DisplayInfor listUsers = {this.state.listUsers}/>
            </>
        );
    };
}

export default MyComponent; 