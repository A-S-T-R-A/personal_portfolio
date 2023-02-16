import { Button, Section, SectionTitle } from "modules/common/ui"
import { AnimatedModal } from "modules/common/ui/AnimatedModal"
import ProjectImagesSwiper from "./components/ProjectImagesSwiper/ProjectImagesSwiper"

import ProjectTechnologies from "./components/ProjectTechnologies/ProjectTechnologies"
import styles from "./DescriptionModal.module.css"

export function DescriptionModal({ data, showModal, setShowModal }) {
    const { images, title, description, visit, technologies } = data

    return (
        <AnimatedModal
            opened={showModal}
            onClose={() => setShowModal(false)}
            innerClassName={styles.container}
        >
            <ProjectImagesSwiper images={images} />

            <Section isNopadding className={styles.contentContainer}>
                <SectionTitle>{title}</SectionTitle>

                <h4 className={styles.modalTitle}>About</h4>
                <p className={styles.desc}>{description}</p>

                <h4 className={styles.modalTitle}>Technologies:</h4>
                <ProjectTechnologies
                    technologies={technologies}
                    className={styles.tech}
                />

                <div className={styles.buttonsContainer}>
                    <Button
                        isAlt
                        className={styles.btn}
                        onClick={e => {
                            e.preventDefault()
                            window.open(visit, "_blank")
                        }}
                    >
                        Live Demo
                    </Button>

                    <Button
                        isDisabled
                        isAlt
                        className={styles.btn}
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </Button>
                </div>
            </Section>
        </AnimatedModal>
    )
}
