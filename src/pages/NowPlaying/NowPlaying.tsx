import { MovieList } from "../../components";
import MovieLayout from "../../components/MovieLayout/MovieLayout";

const NowPlaying: React.FC = () => {
  return (
    <MovieLayout>
      <MovieList type="now_playing" />
    </MovieLayout>
  );
};

export default NowPlaying;
