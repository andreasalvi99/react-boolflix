import { useSearch } from "../contexts/SearchContext";

export default function Header() {
  const { handleSubmitAndFetchFilms, handleSerachInput, searchInput } =
    useSearch();

  return (
    <nav className="navbar bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand">
          <span className="logo">BOOLFLIX</span>
        </a>
        <form
          className="d-flex"
          role="search"
          onSubmit={handleSubmitAndFetchFilms}
        >
          <input
            value={searchInput}
            onChange={handleSerachInput}
            //^
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-danger" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
