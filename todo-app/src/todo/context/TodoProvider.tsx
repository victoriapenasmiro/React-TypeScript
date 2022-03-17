import { useReducer } from "react"
import { TodoState } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { TodoReducer } from "./TodoReducer"

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [{
        id: '1',
        desc: 'recolectar piedras infinito',
        completed: false
    }, {
        id: '2',
        desc: 'Piedra del alma',
        completed: false
    }],
    completed: 2,
    pending: 2
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props) => {

    const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

    const toggleTodo = (id: string) => {
        dispatch({
            type: "toggleTodo", payload: {
                id
            }
        });
    }

    return (
        // hight order component --> recibe sus componentes hijos por props
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}