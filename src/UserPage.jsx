import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom';

 
class UserPage extends React.Component {
  render() {
    const photo = ''
    const userName = ''
    const location = ''
 
    const comments = [
      {
        id: '1',
        photo: 'https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png',
        userName: 'Mike Ross',
        content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ',
        
      }
    ]
    document.getElementById("editUser").onclick = function() {
      location.hfef = "/EditUser.jsx"
    }
 
    return (
      <div>
      {/* <div style={{ margin: '0 auto', width: '100%' }}>
        <UserProfile photo={photo} userName={userName} location={location} initialLikesCount={121} initialFollowingCount={723} initialFollowersCount={4433} initialComments={comments} />
      </div> */}
      <button id="editUser"> </button>
      </div>
    )
    
  }
}
 
export default UserPage