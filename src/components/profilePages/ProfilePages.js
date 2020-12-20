import React, { useEffect, useState } from "react"
import "./../../style/ProfilePages.scss"

export const ProfilePages = (props) => {
    useEffect(() => {
        props.MyProfileThunk(props.myId)
        props.getStatusThunk(props.myId)
    }, [props.myResult, props.myStatus])
    let [file, setfile] = useState()
    let [input, setInput] = useState(true)
    let [valueInputStatus,SetValueInputStatus ] = useState(props.myStatus)
    let onclickButton = () => {
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
                                alt="img"
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

                            <button className="photo-change__send" onClick={() => onclickButton()} >
                                отправить
                            </button>
                        </div>
                    </div>
                    <div className="my-profile__box2">
                        <div className="container">
                            <div className="profile-myNames">{m.fullName}</div>
                            <div className="profile-myStatus">
                                {input ? <div className="profile-myStatus__status"
                                        onClick={() => setInput(false)}
                                    >
                                        {props.myStatus}
                                    </div>
                                :
                                <input 
                                autoFocus={true}
                                onBlur={() => {setInput(true); props.putStatusThunk(valueInputStatus)}}
                                value={valueInputStatus}
                                onChange={(e)=>SetValueInputStatus(e.target.value)}
                                />
            }
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}