import { SocialIcons } from "modules/common/components/SocialIcons"
import React from "react"

import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.wrapper} id="footer">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.phone}>
                        <h4 className={styles.linkTitle}>Call</h4>
                        <a className={styles.link} href="tel:314-343-3432">
                            314-343-3432
                        </a>
                    </div>
                    <div className={styles.email}>
                        <h4 className={styles.linkTitle}>Email</h4>
                        <a className={styles.link} href="Artius@shmartius.com">
                            Artius@shmartius.com
                        </a>
                    </div>
                    {/* <p className={styles.slogan}>
                        Innovating one project at a time
                    </p> */}
                    <div className={styles.socialIcons}>
                        <SocialIcons className={styles.icons} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
