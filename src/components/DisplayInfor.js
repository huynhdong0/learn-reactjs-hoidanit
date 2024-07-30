import React, { useState } from "react";
import './DisplayInfor.scss';

// class DisplayInfor extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             isShowHide: true
//         };
//     }

//     handleShowHide = () => {
//         this.setState({
//             isShowHide: !this.state.isShowHide
//         })
//     }

//     render() {
//         const {listUsers, handleDeleteUser} = this.props;
//         return(
//             <div className="display-infor-container">
//                 <div>
//                     <span  onClick={() => {this.handleShowHide()}}>
//                         {this.state.isShowHide ? 'Hide' : 'Show'} list users
//                     </span>
//                 </div>
//                 {/* <img src={logo} alt="logo"/> */}
//                 {this.state.isShowHide && 
//                     <div>
//                     {listUsers.map((user) => {
//                         return (
//                             <div key={user.id} className={+user.age > 18 ? 'red' : 'green'}>
//                                 <div>My name's: {user.name}</div>
//                                 <div>My age's: {user.age}</div>
//                                 <div>My address's: {user.address}</div>
//                                 <div>
//                                 <button onClick={() => {handleDeleteUser(user.id)}}>Delete</button>
//                                 </div>
//                                 <hr/>
//                             </div>
//                         );
//                     })}
//                     </div>}
//             </div>
//         );
//     };
// }

const DisplayInfor = (props) => {
    const {listUsers, handleDeleteUser} = props; // object
    const [isShowHideUser, setShowHideUser] = useState(true);

    const handleShowHideUser = () => {
        setShowHideUser(!isShowHideUser);
    };

    return(
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideUser()}>
                    {isShowHideUser ? 'Hide list users' : 'Show list users'}
                </span>
            </div>
            {isShowHideUser && 
                <div>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? 'red' : 'green'}>
                                <div>My name's: {user.name}</div>
                                <div>My age's: {user.age}</div>
                                <div>My address's: {user.address}</div>
                                <div>
                                <button onClick={() => {handleDeleteUser(user.id)}}>Delete</button>
                                </div>
                                <hr/>
                            </div>
                        );
                    })}
                </div>}
        </div>
    );
};

export default DisplayInfor;