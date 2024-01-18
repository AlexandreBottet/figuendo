import charactersData from '../../../data/characters';

import './Figurines.css';

interface Props {
    selectedGame: string
}

const Figurines = ({ selectedGame }: Props) => {
    const filteredCharacters = charactersData.filter(character => character.game === selectedGame);

    if (selectedGame) {
        return (
            <div className="figurines">
                {filteredCharacters.map(character => (
                    <div key={character.id} className="figurines_item">
                        <img className="figurines_item_picture" src={character.image} alt={character.name}></img>
                        <h3 className="figurines_item_name">{character.name}</h3>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="figurines">
            {charactersData.map(character => (
                <div key={character.id} className="figurines_item">
                    <img className="figurines_item_picture" src={character.image} alt={character.name}></img>
                    <h3 className="figurines_item_name">{character.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default Figurines;