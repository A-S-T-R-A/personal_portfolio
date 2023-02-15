import React from "react"
import styles from "./NavigationList.module.css"
import { NavigationLink } from "../NavigationLink"
import { menuData, socialsData } from "../data"

function NavigationList({ closeClickHandler }) {
    return (
        <>
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
        </>
    )
}

export default NavigationList
