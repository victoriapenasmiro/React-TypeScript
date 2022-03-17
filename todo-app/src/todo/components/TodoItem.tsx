import { useContext } from "react"
import { TodoContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces"

interface props {
    todo: Todo
}

export const TodoItem = ({todo}: props) => {

    // const { toggleTodo } = useContext(TodoContext);

    // const handleDbClick = () => {
    //     toggleTodo( todo.id );
    // }

    const { toggleTodo } = useTodos();

    return (
        <li style={{
            cursor: "pointer",
            textDecoration: todo.completed ? 'line-through': ''
        }}
        // onDoubleClick={handleDbClick}>
        onDoubleClick={() => toggleTodo(todo.id)}>
            {todo.desc}
        </li>
    )
}