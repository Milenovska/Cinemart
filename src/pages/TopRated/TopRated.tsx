import MovieLayout from "../../components/MovieLayout/MovieLayout";
import { MovieList } from "../../components";

const TopRated: React.FC = () => {
  return (
    <MovieLayout>
      <MovieList type="top_rated" />
    </MovieLayout>
  );
};

export default TopRated;
