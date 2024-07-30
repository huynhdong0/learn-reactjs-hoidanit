import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             listUsers: [
//                 {id: 1, name: 'D_1', age: '21', address: 'LA'},
//                 {id: 2, name: 'D_2', age: '32', address: 'LA'},
//                 {id: 3, name: 'D_3', age: '16', address: 'LA'}
//             ]
//         };
//     }
    
//     handleAddNewUser = (user) => {
//         console.log(user);
//         this.setState({
//             listUsers: [user, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         this.setState({
//             listUsers:  this.state.listUsers.filter(user => user.id !== userId)
//         })
//     }

//     render() {  
//         return (
//             <>
//                 <AddUserInfor 
//                 handleAddNewUser = {this.handleAddNewUser}
//                 />
//                 <DisplayInfor
//                  listUsers = {this.state.listUsers}
//                  handleDeleteUser = {this.handleDeleteUser}
//                  />
//             </>
//         );
//     };
// }

const MyComponent = (props) => {
    const [listUsers, setListUser] = useState(
        [                 
            {id: 1, name: 'D_1', age: '21', address: 'LA'},
            {id: 2, name: 'D_2', age: '32', address: 'LA'},
            {id: 3, name: 'D_3', age: '16', address: 'LA'}
        ]
    )

    const handleAddNewUser = (user) => {
        console.log(user);
        setListUser([user, ...listUsers]);
    };

    const handleDeleteUser = (userId) => {
        setListUser(listUsers.filter(user => user.id != userId));
    };

    return (
        <>
            <AddUserInfor 
            handleAddNewUser = {handleAddNewUser}
            />
            <DisplayInfor
                listUsers = {listUsers}
                handleDeleteUser = {handleDeleteUser}
                />
        </>
    );
}

export default MyComponent; 