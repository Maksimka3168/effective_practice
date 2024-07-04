import characters from "../../consts/charactersForLinks.json";
import "./Characters.css";
import ListItemCard from "../../components/listItemCard/ListItemCard";
import SearchPanel from "../../components/seachBlock/SearchBlock";

const Characters = () => {
  return (
    <>
      <div className="title">
        <h1>Герои</h1>
        <p className="counter">({characters.length})</p>
      </div>
      <SearchPanel type="characters" placeholder="Введите имя героя" />
      <div className="cardContainer">
        {characters.map((character) => (
          <ListItemCard
            key={character.id}
            id={character.id}
            name={character.name}
            description={character.description}
            img={character.img}
            type="characters"
          />
        ))}
      </div>
    </>
  );
};

export default Characters;
