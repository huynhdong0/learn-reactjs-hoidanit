import React from "react";

class DisplayInfor extends React.Component {

    render() {
        const {name, age, address} = this.props;
        return(
            <div>
                <div>My name's: {name}</div>
                <div>My age's: {age}</div>
                <div>My address's: {address}</div>
            </div>
        );
    };
}
export default DisplayInfor;