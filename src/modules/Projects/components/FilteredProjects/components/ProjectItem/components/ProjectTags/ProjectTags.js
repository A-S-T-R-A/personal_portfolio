import { classNames } from "modules/common/helpers/classNames"
import styles from "./ProjectTags.module.css"

function ProjectTags({ tags, filterActive }) {
    return (
        <div className={styles.tagsContainer}>
            {filterActive === "All" ? (
                tags.slice(0, 3).map((tag, index) => (
                    <p className={styles.tag} key={index}>
                        {tag.length > 7 ? `${tag.slice(0, 6)}...` : tag}
                    </p>
                ))
            ) : (
                <p className={classNames(styles.tag, {}, [styles.active])}>
                    {filterActive}
                </p>
            )}
        </div>
    )
}

export default ProjectTags
