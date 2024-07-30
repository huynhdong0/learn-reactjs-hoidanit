import React, { useState } from "react";
// class AddUserInfor extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             name : "Huynh Dong",
//             age: 21,
//             address: "LA",
//         };
//     }

//     handleOnChangeName = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }
//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }
//     handleOnChangeAddress = (event) => {
//         this.setState({
//             address: event.target.value
//         })
//     }

//     // handleSubmit = (event) => {
//     //     // ignore refresh again page
//     //     event.preventDefault();
//     //     console.log(this.state);
    
//     // }

//     handleAddNewUser = (event) => {
//         // ignore refresh again page
//         event.preventDefault();
//         this.props.handleAddNewUser(
//             {   id: Math.floor((Math.random()*100)+1) +'-random',
//                 name: this.state.name,
//                 age: this.state.age,
//                 address: this.state.address
//             }
//         )
//     }

//     render() { 
//         return (
//             <div className="user-container">
//                 <form onSubmit={(event) => {this.handleAddNewUser(event)}}>
//                     <input type="text" placeholder="Huynh Dong"
//                      onChange={(event) => {this.handleOnChangeName(event)}}/>
//                     <input type="text" placeholder="21"
//                     onChange={(event) => {this.handleOnChangeAge(event)}}/>
//                     <input type="text" placeholder="LA"
//                     onChange={(event) => {this.handleOnChangeAddress(event)}}/>
//                     <button>
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         )
//     };
// }

const AddUserInfor = (props) => {
    const [name, setName] = useState('Huynh Dong');
    const [age, setAge] = useState('21');
    const [address, setAdress] = useState('LA');

    const handleOnChangeName = (event) => {
        setName(event.target.value)
    };

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    };

    const handleOnChangeAddress = (event) => {
        setAdress(event.target.value)
    };

    const handleAddNewUser = (event) => {
        event.preventDefault();
        props.handleAddNewUser(
            {   id: Math.floor((Math.random()*100)+1) +'-random',
                name: name,
                age: age,
                address: address,
            }
        )
    };

    return (
        <div className="user-container">
            <form onSubmit={(event) => {handleAddNewUser(event)}}>
                <input type="text" placeholder={name}
                    onChange={(event) => {handleOnChangeName(event)}}/>
                <input type="text" placeholder={age}
                onChange={(event) => {handleOnChangeAge(event)}}/>
                <input type="text" placeholder={address}
                onChange={(event) => {handleOnChangeAddress(event)}}/>
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
};
export default AddUserInfor;