import { Button, Typography } from "antd";
import { useReducer } from "react";

//el estado inicial no se debe modificar NUNCA!!!
const initalState = {
    contador: 0,
}

// | en TS es un "||". Indica los diferentes tipos que permite el type Action Type
type ActionType =
    | { type: 'incrementar' }
    | { type: 'decrementar' }
    | { type: 'custom', payload: number };

//NUNCA se va a modificar el STATE, lo que se hace es crear un nuevo STATE
//la siguiente función se conoce comunmente como un reducer
//state: estado actual
//action: función que utilizamos para retornar un nuevo state, indica que lo que vamos a realizar
const contadorReducer = (state: typeof initalState, action: ActionType) => {

    //siempre se debe retornar un state!!
    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            };

        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            };

        case 'custom':
            return {
                ...state,
                contador: action.payload
            };

        default: return state;
    }
}


/*
    El objetivo de userReducer tiene el mismo objetivo que usestate, gestionar el estado de su aplicación
    pero está más enfocado cuando el objeto es complejo, estilo un obj con arrays y objetos con muchos niveles
*/
export const ContadorRed = () => {
    //dispatch: función que dispara acciones del tipo ActionType
    //contadorReducer --> función para retornar siempre un nuevo state
    const [contadorState, dispatch] = useReducer(contadorReducer, initalState);

    // desestructurando objeto --> const [ {contador}, dispatch] = useReducer(contadorReducer, initalState);

    return (
        <>
            <Typography.Title level={3}>Contador: {contadorState.contador}</Typography.Title>
            <Button type="primary" onClick={() => dispatch({ type: 'incrementar' })}>Incrementar +1</Button>
            <Button type="primary" ghost onClick={() => dispatch({ type: 'decrementar' })}>Decrementar -1</Button>
            <Button type="primary" ghost danger onClick={() => dispatch({ type: 'custom', payload: 100 })}>Reset a 100</Button>

        </>
    )
}