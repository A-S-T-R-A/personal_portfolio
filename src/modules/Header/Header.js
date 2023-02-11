import React from "react"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { DiCssdeck } from "react-icons/di"

import styles from "./Header.module.css"

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.div1}>
                <a
                    href="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                    }}
                >
                    <DiCssdeck size="3rem" /> <span>Portfolio</span>
                </a>
            </div>
            <div className={styles.div2}>
                <li>
                    <a className={styles.navlink} href="#projects">
                        Projects
                    </a>
                </li>
                <li>
                    <a className={styles.navlink} href="#tech">
                        Technologies
                    </a>
                </li>
                <li>
                    <a className={styles.navlink} href="#about">
                        About
                    </a>
                </li>
            </div>
            <div className={styles.div3}>
                <a className={styles.social} href="https://google.com">
                    <AiFillGithub size="3rem" />
                </a>
                <a className={styles.social} href="https://google.com">
                    <AiFillLinkedin size="3rem" />
                </a>
                <a className={styles.social} href="https://google.com">
                    <AiFillInstagram size="3rem" />
                </a>
            </div>
        </div>
    )
}

export default Header
