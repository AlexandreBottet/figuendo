import './Games.css';

interface Props {
    games: string[],
    handleClick: (game: string) => void
}

const Games = ({ games, handleClick }: Props) => {

    return (
        <div className="games">
            <ul className="games_list">
                {games.map(game => (
                    <li key={game} onClick={() => handleClick(game)} className="games_list_item">{game}</li>
                ))}
            </ul>
        </div>
    );
};

export default Games;