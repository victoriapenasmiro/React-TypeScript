import { useState } from "react";

interface User {
    uid: string;
    name: string;
}

const tempUser: User = {
    uid: '1111HAKS',
    name: 'Vicky'
}

export const Usuario = () => {

    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Victoria Peñas'
        });
    }
    
    return (
        <div>
            <h3>Usuario: {user?.name} </h3>
            <button
                onClick={login}
                className="btn btn-outline-primary">
                Login
            </button>
            {
                user ? <pre> {JSON.stringify(user)} </pre> : <pre>No existe ningún usuario</pre>
            }
            
        </div>
    )
}