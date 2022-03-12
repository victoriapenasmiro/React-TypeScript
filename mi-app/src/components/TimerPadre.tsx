import { Typography } from "antd";
import { Timer } from "./Timer";

export const TimerPadre = () => {
    return (
        <>
            <Typography.Text>Milisegundos: {1000} </Typography.Text>
            <Timer />
        </>
    )
}