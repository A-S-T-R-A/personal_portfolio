import { Button } from "modules/common/ui"
import { useState } from "react"
import { DescriptionModal } from "./components/DescriptionModal/DescriptionModal"
import { ProjectItemContent } from "./components/ProjectItemContent/ProjectItemContent"
import styles from "./ProjectItem.module.css"

export function ProjectItem({ data }) {
    const { title, description, images, tags, visit } = data

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
                <img src={images[0]} alt={title} className={styles.img} />
            </div>
            <ProjectItemContent
                data={{ description, title, tags }}
                onClick={() => setShowModal(true)}
            />

            <div className={styles.buttonsContainer}>
                <Button
                    isAlt
                    onClick={() => setShowModal(true)}
                    className={styles.btn}
                >
                    Details
                </Button>
                <Button
                    isAlt
                    onClick={e => {
                        e.preventDefault()
                        window.open(visit, "_blank")
                    }}
                    className={styles.btn}
                >
                    Live Demo
                </Button>
            </div>
        </div>
    )
}
