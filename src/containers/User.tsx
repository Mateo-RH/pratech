import React, { useState } from 'react';
import {LoginForm} from "../components/LoginForm"
import {RegisterForm} from "../components/RegisterForm"

interface Props {
    setToken: (arg0:string|undefined) => void
}

export const User: React.FC<Props> = ({setToken}) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [showRegister, setShowRegister] = useState<boolean>(false)

    const login = () => {
        console.log(email);
        console.log(password);
        const token = email+password
        // setToken(token)
    }

    const register = () => {
        console.log(email);
        console.log(name);
        console.log(password);

    }

    return (
        <div>
            {showRegister ?
                <React.Fragment>
                    <RegisterForm 
                        Email={{value: email, setter: setEmail}}
                        Name={{value: name, setter: setName}}
                        Password={{value: password, setter: setPassword}}
                        register={register}
                    />
                    <button onClick={() => setShowRegister(false)}>
                        Login
                    </button>
                </React.Fragment>: 
                <React.Fragment>
                    <LoginForm 
                        login={login} 
                        Email={{value: email, setter: setEmail}} 
                        Password={{value: password, setter: setPassword}} 
                    />
                    <button onClick={() => setShowRegister(true)}>
                        Create Account
                    </button>
                </React.Fragment>
            }
        </div>
    )
}