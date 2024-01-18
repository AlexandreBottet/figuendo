import { ChangeEvent } from 'react';
import './Filter.css';

interface Props {
    games: string[],
    searchTerm: string,
    handleSearchTermChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Filter = ({ games, searchTerm, handleSearchTermChange }: Props) => {

    return (
        <div className="filter">
            <h2 className="filter_number">{games.length > 1 ? `${games.length} jeux` : `${games.length} jeu`}</h2>
            <input className="filter_input" value={searchTerm} onChange={handleSearchTermChange} type="text" placeholder="Rechercher..."></input>
        </div>
    );
};

export default Filter;