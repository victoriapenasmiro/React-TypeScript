/**
 * UseContext se utiliza para poder acceder a estados de componentes sin necesidad de enviarlo por props
 */

import { TodoList } from "./components/TodoList"
import { TodoProvider } from "./context/TodoProvider"

export const Todo = () => {
    return (
    
    <TodoProvider>
        <h1>Todo: </h1>
        <TodoList />
    </TodoProvider>
    
)}