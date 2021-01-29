import React, { useEffect, useState } from 'react';
import style from './profileStatus.module.css';


const ProfileStatus = (props) => {

    const [editMode, changeEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    const activeEditMode = () => {
        changeEditMode(true)
    }

    const change = (e) => {
        setStatus(e.currentTarget.value)
    }

    const offEditMode = () => {
        changeEditMode(false);
        props.changeStatus(status);
    }

        return (
            <div className={style.status}>
                {!editMode &&
                <div className={style.statusActive}>
                    <span onClick={activeEditMode}>Status: {props.status}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onChange={change}
                    autoFocus={true}
                    onBlur={offEditMode}
                    value={status}></input>
                </div>
                }

            </div>
        )
    }

export default ProfileStatus;