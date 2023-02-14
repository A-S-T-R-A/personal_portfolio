import { AnimatedModal } from "modules/common/ui/AnimatedModal"
import { RxCross1 } from "react-icons/rx"
/* import { AiFillEye, AiFillGithub } from "react-icons/ai" */
import styles from "./DescriptionModal.module.css"

export function DescriptionModal({ data, showModal, setShowModal }) {
    const { image, title, description, visit, dates, technologies } = data

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
            <div className={styles.contentContainer}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
                <div className={styles.timesContainer}>
                    <p>Started: {dates.start}</p>
                    <p>Finished: {dates.finish}</p>
                </div>

                <div className={styles.tech}>
                    <h4>Technologies:</h4>
                    {technologies.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>

                <div className={styles.buttonsContainer}>
                    <div className={styles.btn}>Source Code</div>
                    <a href={visit}>
                        <div className={styles.btn}>Live Demo</div>
                    </a>
                </div>
            </div>
            {/* <a href={linkSource} target="_blank" rel="noreferrer">
                <div className={styles.iconContainer}>
                    <AiFillEye className={styles.icon} />
                </div>
            </a>
            <a href={linkCode} target="_blank" rel="noreferrer">
                <div className={styles.iconContainer}>
                    <AiFillGithub className={styles.icon} />
                </div>
            </a> */}
        </AnimatedModal>
    )
}
