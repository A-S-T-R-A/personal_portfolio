import styles from "./AboutItem.module.css"

export function AboutItem({ data }) {
    const { img, title, desc } = data

    return (
        <div className={styles.container}>
            <img src={img} alt="" />
            <div className={styles.infoContainer}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    )
}
