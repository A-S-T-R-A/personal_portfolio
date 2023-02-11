import styles from "./UtilityList.module.css"

function UtilityList({ visit, source }) {
    return (
        <ul className={styles.list}>
            <a href={visit} className={styles.link}>
                Code
            </a>
            <a href={source} className={styles.link}>
                Source
            </a>
        </ul>
    )
}

export default UtilityList
