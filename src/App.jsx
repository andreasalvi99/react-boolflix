import { SearchBarProvider, useSearch } from "./contexts/SearchContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <SearchBarProvider>
      <BrowserRouter>
        <Routes>
          <Route index Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </SearchBarProvider>
  );
}
