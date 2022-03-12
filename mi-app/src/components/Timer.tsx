import { Typography } from "antd";
import { useEffect, useState } from "react";

export const Timer = () => {

    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        //cada segudo se ejecuta esta función
        setInterval(() => setSegundos( s => s + 1), 1000);
    }, []);
;
    return (
        <>
        <Typography.Title level={4}>Timer: <small>{ segundos }</small></Typography.Title>
        </>
    )
}