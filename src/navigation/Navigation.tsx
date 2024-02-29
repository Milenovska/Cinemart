import { Route, Routes } from "react-router-dom";

import {
  DetailPage,
  ErrorPage,
  NowPlaying,
  Popular,
  TopRated,
  Upcoming,
} from "../pages";
import { SearchResults } from "../components";

const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NowPlaying />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/topRated" element={<TopRated />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/detail/:movie" element={<DetailPage />} />
      <Route path="search/:value" element={<SearchResults />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Navigation;
