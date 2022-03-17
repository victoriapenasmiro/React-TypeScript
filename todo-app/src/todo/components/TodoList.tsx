import { useContext } from "react"
import { TodoContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {

    // const { todoState } = useContext(TodoContext);
    // const { todos } = todoState;

    //idem que lo de arriba, mediante un hook
    //de esta forma solo tenemos una importación y una linea
    const { todos } = useTodos();

    return (
    <ul>
        {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
    </ul>)
}