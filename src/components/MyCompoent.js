import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    
    state = {
        listUsers: [
            {id: 1, name: 'D_1', age: '21', address: 'LA'},
            {id: 2, name: 'D_2', age: '32', address: 'LA'},
            {id: 3, name: 'D_3', age: '16', address: 'LA'}
        ]
    };

    render() {  
        return (
            <div>
                <UserInfor/>
                <DisplayInfor listUsers = {this.state.listUsers}/>
            </div>
        );
    };
}

export default MyComponent; 