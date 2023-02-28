import React from "react"
import styles from "./CardDescription.module.css"

import { GoLinkExternal } from "react-icons/go"

//@ts-ignore
import headsetSvg from "assets/nProjects/headset.svg"
import { Button, ButtonVariant } from "modules/common/ui/Button"

interface CardDescriptionProps {
    title: string
    description: string
}

function CardDescription({ title, description }: CardDescriptionProps) {
    return (
        <div className={styles.container}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardDesc}>{description}</p>
            <div className={styles.btnContainer}>
                <Button variant={ButtonVariant.FILLED} className={styles.btn}>
                    <GoLinkExternal className={styles.btnIcon} />
                    Visit
                </Button>
                {/* <Button variant={ButtonVariant.OUTLINED}>SOURCE</Button> */}
            </div>
        </div>
    )
}

export default CardDescription
