import React from 'react';

interface Props {
    login: () => void
    Email: Field
    Password: Field
}

interface Field {
    value: string
    setter: (arg0:string) => void
}


export const LoginForm: React.FC<Props> = ({login, Email, Password}) => {
    const {value: email, setter: setEmail} = Email
    const {value: password, setter: setPassword} = Password
    return (
        <div>
            <h1>Login</h1>
            <label>Email</label>
            <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <label>Password</label>
            <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button onClick={login}>Login</button>
        </div>
    )
}