import React, { useState } from "react"
import styles from "./Burger.module.css"

import { BurgerIcon } from "./components/BurgerIcon"
import { BurgerNav } from "./components/BurgerNav"

function Burger() {
    const [showBurger, setShowBurger] = useState(false)

    function clickHandler(e) {
        e.stopPropagation()
        setShowBurger(false)
    }

    return (
        <div
            className={showBurger ? styles.wrapper : styles.disNone}
            onClick={clickHandler}
        >
            <BurgerIcon showBurger={showBurger} setShowBurger={setShowBurger} />
            <BurgerNav showBurger={showBurger} setShowBurger={setShowBurger} />
        </div>
    )
}

export default Burger
