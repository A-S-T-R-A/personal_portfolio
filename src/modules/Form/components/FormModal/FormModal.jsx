import { AnimatedModal } from "modules/common/ui/AnimatedModal"
import React, { useEffect, useState } from "react"
import styles from "./FormModal.module.css"
import { RxCross1 } from "react-icons/rx"
import { ModalContent } from "./components/ModalContent/ModalContent"

function FormModal({ loading, isSuccess }) {
    const [animationIn, setAnimationIn] = useState(false)

    useEffect(() => {
        if (loading) {
            setAnimationIn(true)
        }
    }, [loading])

    return (
        <AnimatedModal
            opened={animationIn}
            onClose={() => setAnimationIn(false)}
            innerClassName={styles.container}
        >
            <RxCross1
                className={styles.close}
                onClick={() => setAnimationIn(false)}
            />
            <ModalContent loading={loading} isSuccess={isSuccess} />
        </AnimatedModal>
    )
}

export default FormModal
