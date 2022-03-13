import { Typography } from "antd";
import { useEffect, useRef, useState } from "react";

type TimerArgs = {
    milisegundos: number
}

export const Timer = ( { milisegundos }: TimerArgs ) => {

    const [segundos, setSegundos] = useState(0);
    const ref = useRef<NodeJS.Timer>(); //NodeJS.Timer es el tipo de dato que retorna la functión setInterval

    console.log(milisegundos);

    useEffect(() => {

        if (ref.current) clearInterval(ref.current);
        
        //--> forma abreviada del condicional:
        //ref.current && clearInterval(ref.current);

        //segun el valor de miisegundos se ejecuta el setinterval
        ref.current = setInterval(() => setSegundos( s => s + 1), milisegundos);
    }, []);
;
    return (
        <>
        <Typography.Title level={4}>Timer: <small>{ segundos }</small></Typography.Title>
        </>
    )
}