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
            {/* <div className={styles.imgContainer}>
                <img src={image} alt={title} className={styles.img} />
            </div> */}
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
                    <a href={visit}>
                        <Button isAlt className={styles.btn}>
                            Live Demo
                        </Button>
                    </a>

                    <Button
                        isDisabled
                        isAlt
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </Button>
                </div>
            </Section>
        </AnimatedModal>
    )
}
