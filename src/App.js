import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritesJobs from "./routes/FavoritesJobs";
import MyLittleNav from "./components/MyLittleNav";

function App() {
  return (
    <BrowserRouter>
      <MyLittleNav />
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
        <Route path="favourites" element={<FavoritesJobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
