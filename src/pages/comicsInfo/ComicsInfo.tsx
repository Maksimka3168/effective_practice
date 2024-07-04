import { Link, useParams } from "react-router-dom";
import { IComics } from "../../store/types";
import comicsMap from "../../consts/comics.json";
import "./ComicsInfo.css";

const ComicsInfo = () => {
  const { id } = useParams();
  const comicsList: IComics | undefined = comicsMap.find(
    (char) => char.id === Number(id)
  );

  return (
    <div className="comicsPage">
      <div className="leftBar">
        <button className="backButton" onClick={() => window.history.back()}>
          <img src="../src/assets/back.svg" />
          Назад
        </button>
        <img
          className="comicsImg"
          src={"../src/assets/comics/" + comicsList?.img}
        />
      </div>
      <div className="rightBar">
        <div className="comicsInfo">
          <h1>{comicsList?.name}</h1>
          <p>Автор: {comicsList?.author}</p>
          <p>{comicsList?.published}</p>
          <p>{comicsList?.description}</p>
        </div>
        <div className="charactersList">
          <h2>Герои:</h2>
          <ol>
            {comicsList?.characters.map((char) => (
              <li>
                <Link
                  to={"/" + char.id}
                  key={char.id}
                  className="characterItem"
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

export default ComicsInfo;
