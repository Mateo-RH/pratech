import React, {useState, useEffect} from 'react';
import {Products} from "./Products"
import {User} from "./User"


export const Session: React.FC = () => {
    const [token, setToken] = useState<string|undefined>();
    
    useEffect(() => {
        // Look for token on localstorage
        console.log(token);
    })

    return (
        <div>
            {token ? <Products />: <User setToken={setToken}/>}
        </div>
    );
} 