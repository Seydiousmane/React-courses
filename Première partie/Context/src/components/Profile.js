import React, { Component } from 'react';
import ProfileData from './ProfileData';

class Profile extends Component {
  render() {
    return (
        <div className='container'>
            <h1>{this.props.info.name}</h1>
            <ProfileData welcome={this.props.info} />

        </div>
    )
  }
}

export default Profile;
