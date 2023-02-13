import styles from "./AboutItem.module.css"

export function AboutItem({ data }) {
    const { img, title, desc } = data

    return (
        <div className={styles.container}>
            <img src={img} alt="" />
            <div className={styles.infoContainer}>
                <h2 className={styles.title} style={{ marginTop: 20 }}>
                    {title}
                </h2>
                <p className={styles.desc} style={{ marginTop: 10 }}>
                    {desc}
                </p>
            </div>
        </div>
    )
}
