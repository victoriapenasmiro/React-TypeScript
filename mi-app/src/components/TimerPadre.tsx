import { Typography, Divider, Button } from "antd";
import { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {

    const [milisegundos, setMilisegundos] = useState(1000);

    return (
        <>
            <Typography.Text>Milisegundos: {milisegundos} </Typography.Text>
            
            <Button type="primary" ghost size="large" onClick={() => setMilisegundos(1000)}>1000</Button>
            <Button type="primary" ghost size="large" onClick={() => setMilisegundos(2000)} style={{ marginLeft: 8, border: "2px solid green", color: "green" }}>2000</Button>

            <Divider></Divider>

            <Timer milisegundos={milisegundos} />

        </>
    )
}