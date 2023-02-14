import styles from "./ProjectItemButtons.module.css"

export function ProjectItemButtons({ setShowModal, demoLink }) {
    return (
        <div className={styles.container}>
            <div className={styles.btn} onClick={() => setShowModal(true)}>
                Details
            </div>
            <a href={demoLink}>
                <div className={styles.btn}>Live Demo</div>
            </a>
        </div>
    )
}
