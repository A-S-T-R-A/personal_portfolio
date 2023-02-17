import { SocialIcons } from "modules/common/components/SocialIcons"
import React from "react"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <section className={styles.wrapper}>
            <ul className={styles.list}>
                <div className={styles.column}>
                    <h4 className={styles.linkTitle}>Call</h4>
                    <a className={styles.link} href="tel:314-343-3432">
                        314-343-3432
                    </a>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.linkTitle}>Email</h4>
                    <a
                        className={styles.link}
                        href="mailto:contact@jsmastery.com"
                    >
                        contact@jsmastery.com
                    </a>
                </div>
            </ul>
            <div className={styles.socialsContainer}>
                <div className={styles.companyContainer}>
                    <p className={styles.slogan}>
                        Innovating one project at a time
                    </p>
                </div>
                <div className={styles.socialIcons}>
                    <SocialIcons />
                </div>
            </div>
        </section>
    )
}

export default Footer
