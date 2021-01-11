import React, { useState } from 'react';
import {LoginForm} from "../presenters/LoginForm"
import {RegisterForm} from "../presenters/RegisterForm"
import {Error} from "../presenters/Error"
import UserMethods from "../controllers"

interface Props {
    setToken: (arg0:string|undefined) => void
}

export const User: React.FC<Props> = ({setToken}) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [showRegister, setShowRegister] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const login = () => {
        UserMethods.login(email, password).then(token => {
            localStorage.setItem("token", token)
            setToken(token)
        }).catch(error => setError(error.message))
    }

    const register = () => {
        UserMethods.register(email, password, register).then(() => {
            // TODO: show success
            setShowRegister(false)
        }).catch(error => setError(error.message))
    }

    const cleanStates = () => {
        setEmail("")
        setPassword("")
        setName("")
        setError("")
    }


    return (
        <div>
            {error && setTimeout(() => setError(""),3000) && <Error error={error}/>}
            {showRegister
                ?<React.Fragment>
                    <RegisterForm 
                        Email={{value: email, setter: setEmail}}
                        Name={{value: name, setter: setName}}
                        Password={{value: password, setter: setPassword}}
                        register={register}
                        cleanStates={cleanStates}
                    />
                    <button onClick={() => setShowRegister(false)}>
                        Login
                    </button>
                </React.Fragment> 
                :<React.Fragment>
                    <LoginForm 
                        login={login} 
                        Email={{value: email, setter: setEmail}} 
                        Password={{value: password, setter: setPassword}} 
                        cleanStates={cleanStates}
                    />
                    <button onClick={() => setShowRegister(true)}>
                        Create Account
                    </button>
                </React.Fragment>
            }
        </div>
    )
}