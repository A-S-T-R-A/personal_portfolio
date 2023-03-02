import React from "react"
import { Button, ButtonVariant } from "modules/common/ui/Button"
import styles from "./BurgerCta.module.css"

import { SocialIcons } from "modules/common/components/SocialIcons"

export function BurgerCta({ closeClickHandler }) {
    function clickHandler() {
        document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })

        closeClickHandler && closeClickHandler()
    }

    return (
        <div className={styles.ctaBtn}>
            <Button
                onClick={clickHandler}
                variant={ButtonVariant.OUTLINED}
                className={styles.contact}
            >
                Contact Me
            </Button>
            <SocialIcons onClick={closeClickHandler} />
        </div>
    )
}
