import React from 'react'

function Profile({count, profile}) {
    console.log('Je suis dans Profile')
    return(
        <div>
            <ul className='list-group'>
                <li className='list-group-item'><p className='h2'>User ID {count}</p></li>
                <li className='list-group-item'><strong>Nom: {profile.name}</strong></li>
                <li className='list-group-item'><strong>Pseudo: {profile.username}</strong></li>
                <li className='list-group-item'><strong>Email: {profile.email}</strong></li>

            </ul>
        </div>
    )
}

export default React.memo(Profile);