import { useState } from "react"
import { DescriptionModal } from "./components/DescriptionModal/DescriptionModal"
import { ProjectItemButtons } from "./components/ProjectItemButtons/ProjectItemButtons"
import { ProjectItemContent } from "./components/ProjectItemContent/ProjectItemContent"
import styles from "./ProjectItem.module.css"

export function ProjectItem({ data }) {
    const { title, description, image, tags, visit } = data

    const [showModal, setShowModal] = useState(false)

    return (
        <div className={styles.container}>
            <DescriptionModal
                data={data}
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
            <ProjectItemButtons setShowModal={setShowModal} demoLink={visit} />
        </div>
    )
}
