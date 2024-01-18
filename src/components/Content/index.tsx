import Games from "./Games";
import Figurines from "./Figurines";

import './Content.css';

interface Props {
    games: string[],
    selectedGame: string,
    handleClick: (game:string) => void;
}

const Content = ({ games, selectedGame, handleClick }: Props) => {
    return (
        <div className="content">
            <Games games={games} handleClick={handleClick} />
            <Figurines selectedGame={selectedGame} />
        </div>
    );
};

export default Content;