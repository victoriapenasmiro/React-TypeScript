import { useState } from "react";
import { Button } from "antd";

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
            <Button onClick={login} type="primary" shape="round" size="large" style={{ marginLeft: 8 }}>LOGIN</Button>

            {
                user ? <pre style={{ marginTop: 8 }}> {JSON.stringify(user)} </pre> : <pre style={{ marginTop: 8 }} >No existe ningún usuario</pre>
            }
            
        </div>
    )
}