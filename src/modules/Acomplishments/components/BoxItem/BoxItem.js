import styles from "./BoxItem.module.css"

function BoxItem({ data }) {
    const { number, text } = data
    return (
        <div className={styles.cotainer}>
            <h5 className={styles.num}>{number}</h5>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default BoxItem
