import styles from "./TagList.module.css"

function TagList({ tags }) {
    return (
        <div>
            <div className={styles.title}>Stack</div>
            <ul className={styles.list}>
                {tags.map((tag, i) => {
                    return (
                        <li className={styles.tag} key={i}>
                            {tag}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TagList
