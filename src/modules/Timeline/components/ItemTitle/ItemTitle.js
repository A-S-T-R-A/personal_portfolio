import TitleImg from "../TitleImg/TitleImg"
import styles from "./ItemTitle.module.css"

function ItemTitle({ year }) {
    return (
        <h4 className={styles.title}>
            {year} <TitleImg />
        </h4>
    )
}

export default ItemTitle
