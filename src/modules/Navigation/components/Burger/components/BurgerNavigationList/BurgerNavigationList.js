import React from "react"
import styles from "./BurgerNavigationList.module.css"
import { NavigationLink } from "../../../common/NavigationLink"
import { menuData } from "../../../common/data"

function BurgerNavigationList({ closeClickHandler }) {
    return (
        <div>
            <ul className={styles.list}>
                {menuData.map(item => {
                    return (
                        <NavigationLink
                            key={item.id}
                            link={item.link}
                            onClick={closeClickHandler}
                        >
                            {item.text}
                        </NavigationLink>
                    )
                })}
            </ul>
        </div>
    )
}

export default BurgerNavigationList
