import { MovieList } from "../../components";
import MovieLayout from "../../components/MovieLayout/MovieLayout";

const Popular: React.FC = () => {
  return (
    <MovieLayout>
      <MovieList type="popular" />
    </MovieLayout>
  );
};

export default Popular;
