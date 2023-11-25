import { useSearchParams } from "react-router-dom"

export const FormSearch = () => {
    const [, setSearchParams] = useSearchParams();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ query: form.elements.name.value });
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Search movies"
                autoComplete="off"
                autoFocus
            />
            <button type="submit">Search</button>
        </form>
  )
}
