import React from "react";
import './DisplayInfo.scss';
import logo from '../logo.svg';
class DisplayInfor extends React.Component {
    state = {
        isShowHide: true
    };

    handleShowHide = () => {
        this.setState({
            isShowHide: !this.state.isShowHide
        })
    }

    render() {
        const {listUsers, handleDeleteUser} = this.props;
        return(
            <div className="display-infor-container">
                <div>
                    <span  onClick={() => {this.handleShowHide()}}>
                        {this.state.isShowHide ? 'Hide' : 'Show'} list users
                    </span>
                </div>
                {/* <img src={logo} alt="logo"/> */}
                {this.state.isShowHide && 
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
}
export default DisplayInfor;