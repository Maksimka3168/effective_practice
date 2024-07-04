import { Link } from "react-router-dom";
import { IListItem } from "../../store/types";
import "./ListItemCard.css";
const ListItemCard: React.FC<IListItem> = (props) => {
  //src={"src/assets/" + imgLink + props.img}
  const imgLink =
    props.type === "characters"
      ? "heroes/"
      : props.type === "comics"
      ? "comics/"
      : null;
  return (
    <Link
      to={
        props.type === "characters"
          ? "/" + props.id
          : props.type === "comics"
          ? "/comics/" + props.id
          : "/"
      }
      className="cardWrapper"
      style={{backgroundImage: `url(src/assets/${imgLink}${props.img})`}}
    >
      <div className="cardContent">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default ListItemCard;
