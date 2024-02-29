import MovieLayout from "../../components/MovieLayout/MovieLayout";
import { MovieList } from "../../components";

const UpComing: React.FC = () => {
  return (
    <MovieLayout>
      <MovieList type="upcoming" />
    </MovieLayout>
  );
};

export default UpComing;
