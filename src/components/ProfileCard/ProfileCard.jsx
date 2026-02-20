import { useState } from 'react'

function ProfileCard({name, profession, description}) {
    return (
        <div>
            <h3>ProfileCard</h3>
            <h4>{name}</h4>
            <h5>{profession}</h5>
            <p>{description}</p>
        </div>
    )

} 

export default ProfileCard;