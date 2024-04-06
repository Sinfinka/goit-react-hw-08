import { useDispatch, useSelector } from "react-redux";
import css from "../SearchBox/SearchBox.module.css";
import {selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";



export default function SearchBox() {
  const dispatch = useDispatch();
  const filterData = useSelector(selectNameFilter);
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filterData}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Enter a name to search..."
      />
    </div>
  );
}
