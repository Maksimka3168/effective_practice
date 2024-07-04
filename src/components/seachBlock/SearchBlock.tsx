import "./SearchBlock.css";
import { ISearchProps } from "../../store/types";

const SearchBlock = (props: ISearchProps) => {
  return (
    <form className="inputWrapper">
      <input type="text" placeholder={props.placeholder} />
      <button>search</button>
    </form>
  );
};

export default SearchBlock;
