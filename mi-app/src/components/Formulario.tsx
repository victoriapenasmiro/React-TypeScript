import { ChangeEvent, useState } from "react"
import { useForm } from "../hooks/useForm";

export const Formulario = () => {

    //usando hooks
    const {formulario, handleChange} = useForm({
        email: "",
        nombre: ""
    });

    const { email, nombre } = formulario;

    // const [formulario, setFormulario] = useState({
    //     email: "",
    //     nombre: ""
    // });

    /**
     * ChangeEvent es un tipo de dato propio de React para capturar el onChange de un campo
     * Es necesario especificar el tipo de campo que está cambiando, en este caso un input. Idem para el caso de select
     * 
     * @param event evento que ejecuta el input al onChange
     */
    // const handleChange = ( { target } : ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = target;

    //     setFormulario({
    //         ...formulario,
    //         [name]: value
    //     });
    // }

    return <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label">
                Email:
            </label>
            <input type="email"
                className="form-control"
                name="email"
                onChange={handleChange}
                value={email}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">
                Nombre:
            </label>
            <input type="text"
                className="form-control"
                name="nombre"
                onChange={handleChange}
                value={nombre}
            />
        </div>

        <pre> {JSON.stringify(formulario)} </pre>
    </form>
}