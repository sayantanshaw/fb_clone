import { Button } from '@material-ui/core'
import React from 'react'
import {auth,provider} from './firebase'
import './Login.css'
import { actionType } from './reducer'
import { useStateValue } from './StateProvider'
function Login() {
    const [state,dispatch]=useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionType.SET_USER,
                user:result.user,
            })
            //console.log(result)
        }).catch((error)=>{
            alert(error.message)
        })
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' alt=''/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg' alt=''/>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
