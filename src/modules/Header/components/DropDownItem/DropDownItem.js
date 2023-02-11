import styles from "./DropDownItem.module.css"

export function DropDownItem({ data }) {
    const { title, desc, Icon, link } = data
    return (
        <a
            className={styles.container}
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            <div className={styles.iconContainer}>
                <Icon />
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.desc}>{desc}</p>
            </div>
        </a>
    )
}
