export const FormSearch = () => {
    return (
        <form>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Search movie"
                autoComplete="off"
                autoFocus
            />
            <button type="submit">Search</button>
        </form>
  )
}
