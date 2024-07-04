import ListItemCard from "../../components/listItemCard/ListItemCard";
import SearchPanel from "../../components/seachBlock/SearchBlock";
import comics from "../../consts/comicsForLinks.json";
const Comics = () => {
  return (
    <>
      <div className="title">
        <h1>Комиксы</h1>
        <p className="counter">({comics.length})</p>
      </div>
      <SearchPanel type="comics" placeholder="Введите название комикса" />
      <div className="cardContainer">
        {comics.map((comics) => (
          <ListItemCard
            key={comics.id}
            id={comics.id}
            name={comics.name}
            description={comics.description}
            img={comics.img}
            type="comics"
          />
        ))}
      </div>
    </>
  );
};

export default Comics;
