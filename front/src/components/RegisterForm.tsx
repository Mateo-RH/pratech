import React from 'react';

interface Props {
    register: () => void
    Email: Field
    Password: Field
    Name: Field
}

interface Field {
    value: string
    setter: (arg0:string) => void
}

export const RegisterForm: React.FC<Props> = ({register, Email, Password, Name}) => {
    const {value: email, setter: setEmail} = Email
    const {value: password, setter: setPassword} = Password
    const {value: name, setter: setName} = Name

    return (
        <div>
            <h1>Registration</h1>
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
            <label>Name</label>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <button onClick={register}>Register</button>
        </div>
    )
}