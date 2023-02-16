import styles from "./ProjectTags.module.css"

function ProjectTags({ tags }) {
    return (
        <div className={styles.tagsContainer}>
            {tags.slice(0, 3).map((tag, index) => (
                <p className={styles.tag} key={index}>
                    {tag.length > 7 ? `${tag.slice(0, 6)}...` : tag}
                </p>
            ))}
        </div>
    )
}

export default ProjectTags
