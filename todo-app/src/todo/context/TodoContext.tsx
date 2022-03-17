import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

export type TodoContextProps = {
    todoState: TodoState,
    toggleTodo: ( id: string ) => void
}

/**
 * para evitar el error en el create context por enviar un {}
 * indicamos as TodoContextProps para indicar que actualmente está vacío pero
 * se convertirá en un TodoContextProps
 */
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);