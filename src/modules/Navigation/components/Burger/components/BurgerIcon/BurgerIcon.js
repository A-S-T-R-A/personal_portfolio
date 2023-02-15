import React from "react"
import styles from "./BurgerIcon.module.css"

function BurgerIcon({ showBurger, setShowBurger }) {
    function clickHandler(e) {
        e.stopPropagation()
        setShowBurger(prev => !prev)
    }
    return (
        <div
            aria-label="toggle navigation"
            onClick={clickHandler}
            className={`${styles.container} ${
                showBurger ? styles.burgerOpen : ""
            }`}
        >
            <span className={styles.hamburger}></span>
        </div>
    )
}

export default BurgerIcon
