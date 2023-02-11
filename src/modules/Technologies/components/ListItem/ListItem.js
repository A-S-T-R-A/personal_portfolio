import styles from "./ListItem.module.css"

function ListItem({ data }) {
    const { title, Icon, desc } = data
    return (
        <li className={styles.item}>
            <picture>
                <Icon size="3rem" />
            </picture>
            <div className={styles.listContainer}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.desc}>{desc}</p>
            </div>
        </li>
    )
}

export default ListItem
