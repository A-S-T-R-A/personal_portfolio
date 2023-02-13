import styles from "./ProjectItemContent.module.css"

export function ProjectItemContent({ data }) {
    const { title, description, tags } = data
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.desc} style={{ marginTop: 10 }}>
                {description}
            </p>
            <div className={styles.tagsContainer}>
                <p className={styles.tag}>{tags[0]}</p>
            </div>
        </div>
    )
}
