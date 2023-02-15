import { Button, Section, SectionTitle } from "modules/common/ui"
import { AnimatedModal } from "modules/common/ui/AnimatedModal"
import { RxCross1 } from "react-icons/rx"
import ProjectTechnologies from "./components/ProjectTechnologies/ProjectTechnologies"
import styles from "./DescriptionModal.module.css"

export function DescriptionModal({ data, showModal, setShowModal }) {
    const { image, title, description, visit, technologies } = data

    return (
        <AnimatedModal
            opened={showModal}
            onClose={() => setShowModal(false)}
            innerClassName={styles.container}
        >
            <RxCross1
                className={styles.close}
                onClick={() => setShowModal(false)}
            />

            <div className={styles.imgContainer}>
                <img src={image} alt={title} className={styles.img} />
            </div>
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

                    <Button isDisabled isAlt className={styles.btn}>
                        Code
                    </Button>
                </div>
            </Section>
        </AnimatedModal>
    )
}
