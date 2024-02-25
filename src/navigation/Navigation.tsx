import { Route, Routes } from "react-router-dom";
import { DetailPage, NowPlaying, Popular, TopRated, Upcoming } from "../pages";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<NowPlaying />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/topRated" element={<TopRated />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/detail/:movie" element={<DetailPage />} />
    </Routes>
  );
};

export default Navigation;
