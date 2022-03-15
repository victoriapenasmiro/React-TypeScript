import { useForm } from "../hooks/useForm";

interface formData {
    zip: string,
    ciudad: string
}

export const Formulario2 = () => {

    const {formulario, handleChange} = useForm<formData>({
        zip: "",
        ciudad: ""
    });

    return <form autoComplete="off">
        
        <div className="mb-3">
            <label className="form-label">
                Zip:
            </label>
            <input type="text"
                className="form-control"
                name="zip"
                onChange={handleChange}
            />
        </div>

        <div className="mb-3">
            <label className="form-label">
                Ciudad:
            </label>
            <input type="text"
                className="form-control"
                name="ciudad"
                onChange={handleChange}
            />
        </div>

        <pre> {JSON.stringify(formulario)} </pre>
    </form>
}