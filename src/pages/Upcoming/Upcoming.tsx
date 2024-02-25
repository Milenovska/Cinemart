import { CardList } from "../../components";
import { MOVIE_TYPES } from "../../types/common";

const UpComing: React.FC = () => {
  return (
    <div>
      <CardList type={MOVIE_TYPES.UPCOMING} />
    </div>
  );
};

export default UpComing;
