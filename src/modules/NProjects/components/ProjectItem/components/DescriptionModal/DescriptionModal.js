import { AnimatedModal } from "modules/common/ui/AnimatedModal"
import { RxCross1 } from "react-icons/rx"
import { AiFillEye, AiFillGithub } from "react-icons/ai"
import styles from "./DescriptionModal.module.css"

export function DescriptionModal({
    linkSource,
    linkCode,
    showModal,
    setShowModal,
}) {
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

            <a href={linkSource} target="_blank" rel="noreferrer">
                <div className={styles.iconContainer}>
                    <AiFillEye className={styles.icon} />
                </div>
            </a>
            <a href={linkCode} target="_blank" rel="noreferrer">
                <div className={styles.iconContainer}>
                    <AiFillGithub className={styles.icon} />
                </div>
            </a>
        </AnimatedModal>
    )
}
