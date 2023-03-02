import React, { useState, useEffect } from "react"
import { BurgerCta } from "../"
import { NavigationList } from "../../../common"
import styles from "./BurgerNav.module.css"

export function BurgerNav({ showBurger, setShowBurger }) {
    const [height, setHeight] = useState(window.innerHeight)

    function menuClickHandler(e) {
        e.stopPropagation()
    }

    function closeClickHandler() {
        setTimeout(() => {
            setShowBurger(false)
        }, 20)
    }

    return (
        <div
            className={`${styles.overlay} ${showBurger ? styles.navOpen : ""}`}
            onClick={closeClickHandler}
            style={{ height }}
        >
            <div className={styles.wrapper} onClick={menuClickHandler}>
                <div className={styles.container}>
                    <NavigationList closeClickHandler={closeClickHandler} />
                    <BurgerCta closeClickHandler={closeClickHandler} />
                </div>
            </div>
        </div>
    )
}
