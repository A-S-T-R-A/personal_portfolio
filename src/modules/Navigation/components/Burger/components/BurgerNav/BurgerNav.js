import React from "react"
import { BurgerCta } from "../BurgerCta"
import { BurgerNavigationList } from "../../../Burger/components/BurgerNavigationList"
import styles from "./BurgerNav.module.css"

function BurgerNav({ showBurger, setShowBurger }) {
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
        >
            <div className={styles.wrapper} onClick={menuClickHandler}>
                <div className={styles.container}>
                    <BurgerNavigationList
                        closeClickHandler={closeClickHandler}
                    />
                    <BurgerCta closeClickHandler={closeClickHandler} />
                </div>
            </div>
        </div>
    )
}

export default BurgerNav
