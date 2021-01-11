import React, {useState, useEffect} from 'react';
import {Products} from "./Product/interactors/Products"
import {User} from "./User/interactors/User"


export const Session: React.FC = () => {
    const [token, setToken] = useState<string>();
    
    useEffect(() => {
        // TODO: componentwillmont
        const token = localStorage.getItem("token")
        token && setToken(token)
    },[])

    return (
        <div>
            {token ? <Products token={token} />: <User setToken={setToken}/>}
        </div>
    );
} 