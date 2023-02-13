import { useState } from "react"
import { DescriptionModal } from "./components/DescriptionModal/DescriptionModal"
import { ProjectItemContent } from "./components/ProjectItemContent/ProjectItemContent"
import styles from "./ProjectItem.module.css"

export function ProjectItem({ data }) {
    const { title, description, image, tags, source, visit } = data

    const [showModal, setShowModal] = useState(false)
    console.log(showModal)

    return (
        <div className={styles.container}>
            <DescriptionModal
                linkLive={visit}
                linkCode={source}
                showModal={showModal}
                setShowModal={setShowModal}
            />
            <div
                className={styles.imgContainer}
                onClick={() => setShowModal(true)}
            >
                <img src={image} alt={title} className={styles.img} />
            </div>
            <ProjectItemContent data={{ description, title, tags }} />
        </div>
    )
}
