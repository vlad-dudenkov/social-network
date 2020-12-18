import React, { useEffect } from "react"

export const ProfilePages = (props) => {
    useEffect(()=>{ props.MyProfileThunk(props.myId)},[props.myId])
    return (
        <div className="profile-pages">
        {props.myProfile.map( m => (
            <div key={m.userId}>
                {m.fullName}
            </div>
        ))}
        </div>
    )
}