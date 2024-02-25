import { CardList } from "../../components";
import { MOVIE_TYPES } from "../../types/common";

const TopRated: React.FC = () => {
  return (
    <div>
      <CardList type={MOVIE_TYPES.TOP_RATED} />
    </div>
  );
};

export default TopRated;
