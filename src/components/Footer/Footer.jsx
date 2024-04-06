import { FaInfinity } from "react-icons/fa6";
import css from "./Footer.module.css"
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className={css.footer}>
            <p className={css.text}>2024 Developed by <FaInfinity className={css.rotatingIcon} /> <Link className={css.linkToGit} to="https://github.com/Sinfinka">Sinfinka</Link> </p>
        </footer>
    ) 
}

export default Footer;


