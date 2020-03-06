
import React from 'react'
import axios from 'axios';
import {Route} from 'react-router-dom';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      name : "",
      email : '',
      id : '',
      createdAt: ''
    };  
  }
    componentDidMount() {
      var apiBaseUrl = "http://localhost:3001/api/";
       var payload = {
            id: 1,
            name: "",
            email: "",
            createdAt: ""
        }
        console.log(payload)
        axios.get(apiBaseUrl + "users" + payload.id).then(function (res) {
            console.log(res.data[0]);
            // let userData = response.data[0];
      const users = res.data.name;
      const email = res.data.email;
      const createdAt = res.data.createdAt

  this.setState({ users, email, createdAt });
      // console.log(userData);
      // this.setState({id : userData.id, 
      //             name: userData.name, 
      //             email: userData.email, 
      //             createdAt: userData.createdAt});
  }).catch(function (error) {
      console.log(error);
  });

//   function edit() {
//     function handleClick(e) {
//     e.preventDefault();
//     console.log('Edit Page button was clicked.');
//   }
 
//   return (
//     <a href="http://localhost:3000/editUserPage" onClick={handleClick}>
//       Click me
//     </a>
//   )}
}
    render() {
      
      // const { name, email, createdAt } = this.state;
      // {!isLoading ? (
        // userData.map(post => {
        //   const { name, email, createdAt } = this.state;
        return (
            <div>
                <div className="card"
                    style={
                        {width: '18rem'}}> 
                        {/* { this.state.users.map(users => <li>{users.name}</li>)} */}
                    {/* <img src="'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBigHair&accessoriesType=Round&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=Auburn&clotheType=BlazerSweater&eyeType=EyeRoll&eyebrowType=AngryNatural&mouthType=Tongue&skinColor=Tanned'" className="card-img-top" alt="unable to load"/> */}
                    <div className="card-body">
                        <h5 className="card-title">  {this.state.name}~name~
                        </h5>
                        <p className="card-text"> {this.state.email}</p>
                        <a href="#" className="btn btn-primary">
                            Thanks for being a valued PO user since ~date                            
                        </a>
                        <button id="viewOrders">Order History</button>
                        <br/>
                        <br />
                        {/* <Link to="/edituserpage">
                          <button type="button">
                                Edit Profile
                          </button>
                      </Link> */}
                        {/* <button id="editUser" onClick={() => window.location.href ='/edituserpage'> Edit User Profile</button> */}
                        
                    
                        <button id="Delete">Delete User Profile</button>
                    </div>
                </div>
            </div>
        )}
                    
// //         )
// //     }
// //   }
// class User extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//     id: '',
//     name: '',
//     email: '',
//     createdAt: ''
//     }
//   }
//   componentDidMount() {
//     var apiBaseUrl = "http://localhost:3001/api/";
//        var payload = {
//             id: 1,
//             name: "",
//             email: "",
//             createdAt: "",
//             persons: []
//         }
//         axios.get(apiBaseUrl + "users" , payload)
//         .then(function (res) {
//                   console.log(res.data[0]);
//                       const persons = res.data;
//         this.setState({ persons } )
// })}

//   render() {
//     return (
//       <div>
// <ul>
//         { this.state.persons.map(person => <li>{person.name}</li>)}
//       </ul>
//       </div>
//     )
//   }
  
// }
                    }
export default User;
    
//     // document.getElementById("editUser").addEventListener("click",
//     // function() {
//     // return location.href = "http://localhost:3001/api/edituserpage"