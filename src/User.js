import React from 'react';
import axios from 'axios'; 
import '../public/default-profile.png'

class User extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        email:'',
        password:''
        }
    }

    render() {
        return (
            <div>
                <div class="card" style={{width: '18rem'}}>
                    <img src="../public/default-profile.png" class="card-img-top" alt="unable to load" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default User;