import { ChangeEvent, useState } from "react";

//formato function:
export function useForm<T>(initialState: T) {

//formato arrow function:
//export const useForm = <T extends Object>(initialState: T) => {
    
    const [formulario, setFormulario] = useState(initialState);

    /**
     * ChangeEvent es un tipo de dato propio de React para capturar el onChange de un campo
     * Es necesario especificar el tipo de campo que está cambiando, en este caso un input. Idem para el caso de select
     * 
     * @param event evento que ejecuta el input al onChange
     */
    const handleChange = ( { target } : ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    return {
        formulario,
        handleChange
        //...formulario --> al enviar esto, enviamos los inputs desestructurados al componente 
    }
}