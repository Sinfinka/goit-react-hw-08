import { FaInfinity } from "react-icons/fa6";
import css from "./Footer.module.css"


function Footer() {
    return (
        <footer className={css.footer}>
            <p>2024 Developed by <FaInfinity className={css.rotatingIcon} /> Sinfinka</p>
        </footer>
    ) 
}

export default Footer;


