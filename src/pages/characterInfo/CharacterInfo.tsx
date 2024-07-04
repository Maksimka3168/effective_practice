import { Link, useParams } from "react-router-dom";
import characters from "../../consts/characters.json";
import "./CharacterInfo.css";
import { ICharacter } from "../../store/types";

const CharacterInfo = () => {
  const { id } = useParams();
  const charactersList: ICharacter | undefined = characters.find(
    (char) => char.id === Number(id)
  );

  return (
    <div className="characterPage">
      <div className="leftBar">
        <button className="backButton" onClick={() => window.history.back()}>
          <img src="../src/assets/back.svg" />
          Назад
        </button>
        <img
          className="characterImg"
          src={"src/assets/heroes/" + charactersList?.img}
          alt={charactersList?.name}
        />
      </div>

      <div className="rightBar">
        <div className="characterInfo">
          <h1>{charactersList?.name}</h1>
          <p className="characterDescription">{charactersList?.description}</p>
        </div>
        <div className="comicsList">
          <h2>Комиксы:</h2>
          <ol>
            {charactersList?.comics.map((char) => (
              <li>
                <Link
                  to={"/comics/" + char.id}
                  key={char.id}
                  className="comicsItem"
                >
                  <p>{char.name}</p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
