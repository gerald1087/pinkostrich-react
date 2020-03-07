import React from 'react'
import axios from 'axios'

import Header from "./Header"
import { Link, Route, Router } from 'react-router-dom';
// import LinkButton from '/components/LinkButton';
// // import PropTypes from 'prop-types'
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import history from './history';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
            // this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleOrdersClick(e) {
        e.preventDefault()
        var apiBaseUrl = "http://localhost:3001/api/";
        var payload = {
        user_id: this.props.user.id,
        }
        console.log(payload)
        axios.get(apiBaseUrl + 'orders', payload)
        .then(response => {
        }).catch(error =>  {
        console.log(error);
        });
        }


    handleDeleteClick(e) {
        e.preventDefault()
        axios.delete(`http://localhost:3001/api/deleteprofile/${this.props.user.id}`)
        .then(response => {
            alert("profile successfully deleted")
            this.props.history.push('/')
        window.location.reload()
        console.log(response.data , "deleted message" )
        }
            
        ).catch(error =>  {
        console.log(error);
        });
        }
//         handleEditClick (e) { 
//     // const history = createHistory();

// this.history.push('/edituserpage');
// }



//             localStorage.setItem("pageData", "Data Retrieved from axios request")
//             window.open(("/edituserpage")
//             )}
//      componentWillMount() {
// //   localStorage.pagedata= "your Data";
// //   // set the data in state and use it through the component
// //   localStorage.removeItem("pagedata");
// //   // removing the data from localStorage.  Since if user clicks for another invoice it overrides this data
// function EditUserPage({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.EditUserPage('Edit Profile')}
//       />
//     </View>
//   );
// }

// }

    render() {
        return (
            <div>
<header>
                    <Header/>
                </header>

<div className="card" >
                <h1>Status: {this.props.loggedIn}</h1>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div className="card-body">
        <h3 className="card-title">{this.props.user.name}</h3>
        <p className="card-text">{this.props.user.address_line1}</p>
        <p className="card-text">{this.props.user.city}</p>
        <p className="card-text">{this.props.user.state}</p>
        <p className="card-text">{this.props.user.zip}</p>
        {/* <LinkButton
  to='/path/to/page'
  onClick={(event) => {
    console.log('custom event here!', event)
  }}>Edit Profile</LinkButton> */}
  <button type="submit" variant="btn btn-success" onClick={() => history.push('/edituserpage')}>EDIT</button>
        <button type="submit" onClick={(event) => this.handleEditClick(event)} className="btn btn-primary">Edit Profile</button>
        <button type="submit" onClick={(event) => this.handleOrdersClick(event)} className="btn btn-primary">View Orders</button>
        <button type="submit" onClick={(event) => this.handleDeleteClick(event)} className="btn btn-primary">Delete Profile</button>
                        
                    </div>
</div>
            </div>
            
                )
            }
        }
        
export default Profile