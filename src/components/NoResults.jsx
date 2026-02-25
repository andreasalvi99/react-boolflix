import { useSearch } from "../contexts/SearchContext";
import Header from "./Header";

export default function NoResults() {
  const { searchInput } = useSearch();

  return (
    <>
      <Header />
      <section id="empty-state">
        <div className="container d-flex justify-content-center align-items-center">
          <span className="text-white fs-1">
            Nessun risultato trovato per "{searchInput}"
          </span>
        </div>
      </section>
    </>
  );
}
