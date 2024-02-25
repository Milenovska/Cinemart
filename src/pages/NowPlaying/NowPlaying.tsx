import { CardList } from "../../components";
import { MOVIE_TYPES } from "../../types/common";

const NowPlaying: React.FC = () => {
  return (
    <div>
      <CardList type={MOVIE_TYPES.NOW_PLAYING} />
    </div>
  );
};

export default NowPlaying;
