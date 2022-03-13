import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";
import { TimerPadre } from "./components/TimerPadre";
import { Typography, version, Row, Col, Divider } from "antd";
import { ContadorRed } from "./components/ContadorRed";

function App() {
  return (
    <Row gutter={16}>
      <Col span={20} offset={2}>
        <Typography.Title editable type="success" level={1}>React + TypeScript {version}</Typography.Title>
        <Divider orientation="center">useState</Divider>
        <Counter />
        <Usuario />
      </Col>
      <Col span={20} offset={2}>
        <Divider orientation="left">useEffect</Divider>
        <TimerPadre />
      </Col>

      <Col span={20} offset={2}>
        <Divider orientation="right">useReducer</Divider>
        <ContadorRed />
      </Col>
    </Row>
  );
}

export default App;
