import { useSearchParams } from "react-router-dom"
import { ButtonForm, Forma, InputForm } from "./FormSearch.styled";

export const FormSearch = () => {
    const [, setSearchParams] = useSearchParams();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ query: form.elements.name.value });
        form.reset();
    };

    return (
        <Forma onSubmit={handleSubmit}>
            <InputForm
                type="text"
                name="name"
                id="name"
                placeholder="Search movies"
                autoComplete="off"
                autoFocus
            />
            <ButtonForm type="submit">Search</ButtonForm>
        </Forma>
  )
}
