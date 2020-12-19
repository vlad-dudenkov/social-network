import React, { useEffect, useState } from "react"
import "./../../style/ProfilePages.scss"

export const ProfilePages = (props) => {
    useEffect(() => { props.MyProfileThunk(props.myId) }, [props.myId])
    let [file, setfile] = useState()
    let onclickButton = () => { 
        console.log(file)
        props.newMyPhotosThunk(file)
    }
    return (
        <div className="profile-pages">
            {props.myProfile.map(m => (
                <div
                    className="my-profile"
                    key={m.userId}>
                    <div className="my-profile__box1">
                        <div className="profile-photos">
                            <img
                                className="profile-photos__img"
                                src={m.photos.large ? m.photos.large : props.NotAvatar}
                            />
                        </div>
                        <div className="photo-change">
                            <input
                                className="photo-change__input"
                                id="photo-change__input"
                                type="file"
                                onChange={(e) => setfile(e.target.files[0])}
                            />
                            <label className="photo-change__label" for="photo-change__input">
                                Выбрать фаил
                                {file ? ":1" : ""}
                            </label>

                            <button className="photo-change__send" onClick={()=>onclickButton()} >
                                отправить
                            </button>
                        </div>
                    </div>
                    <div className="my-profile__box2">
                        <div className="profile-myNames">{m.fullName}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}