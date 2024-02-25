import { CardList } from "../../components";
import { MOVIE_TYPES } from "../../types/common";

const Popular: React.FC = () => {
  return (
    <div>
      <CardList type={MOVIE_TYPES.POPULAR} />
    </div>
  );
};

export default Popular;
