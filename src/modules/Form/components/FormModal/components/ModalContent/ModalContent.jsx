import { AnimatedLoadingIcon } from "modules/common/ui/AnimatedLoadingIcon"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BiErrorCircle } from "react-icons/bi"
import { FailContent } from "../FailContent/FailContent"
import { GratitudeContent } from "../GratitudeContent/GratitudeContent"
import { LoadingContent } from "../LoadingContent/LoadingContent"

import styles from "./ModalContent.module.css"

export function ModalContent({ loading, isSuccess }) {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                {loading ? (
                    <AnimatedLoadingIcon className={styles.loadingIcon} />
                ) : isSuccess ? (
                    <AiOutlineCheckCircle className={styles.successIcon} />
                ) : (
                    <BiErrorCircle className={styles.failIcon} />
                )}
            </div>
            <div className={styles.contentContainer}>
                {loading ? (
                    <LoadingContent />
                ) : isSuccess ? (
                    <GratitudeContent />
                ) : (
                    <FailContent />
                )}
            </div>
        </div>
    )
}
