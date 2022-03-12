import { useState } from "react"
import { Button } from "antd";
import { StockOutlined } from '@ant-design/icons';

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const incrementar = (num: number): void => {
        setCounter(counter + num);
    }

    return (
        <div className="my-5">
            <h3>Counter</h3>
            <span>Valor: {counter} </span>
            <br />
            <Button onClick={() => incrementar(1)} type="primary" style={{ marginLeft: 8 }}>+1</Button>
            <Button onClick={() => incrementar(1)} type="default" style={{ marginLeft: 8 }}>+2</Button>
            <Button onClick={() => setCounter(0)} type="primary" ghost icon={<StockOutlined />} size="small" style={{ background: "red", borderColor: "yellow", color:"white", fontWeight:"600" }}>RESET</Button>
        </div>
    )
}