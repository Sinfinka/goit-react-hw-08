import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css"

const NotFoundPage = () => {
  return (
    <div>
      <h2 className={css.title}>Not Found Page</h2>
      <p className={css.text}>Back to: </p>
      <Link className={css.btn} to="/">Home page</Link>
    </div>
  );
};

export default NotFoundPage;
