import { useSearch } from "../contexts/SearchContext";

export default function Header() {
  const { handleSubmitAndFetchFilms, handleSerachInput, searchInput } =
    useSearch();

  return (
    <form className="form-control" onSubmit={handleSubmitAndFetchFilms}>
      <div className="input-group mb-3">
        <input
          value={searchInput}
          onChange={handleSerachInput}
          //^
          type="text"
          className="form-control"
          placeholder="Recipient’s username"
          aria-label="Recipient’s username"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-outline-secondary" type="submit">
          Button
        </button>
      </div>
    </form>
  );
}
