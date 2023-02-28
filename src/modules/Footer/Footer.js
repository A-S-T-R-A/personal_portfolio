import { SocialIcons } from "modules/common/components/SocialIcons"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.wrapper} id="footer">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.phone}>
                        <a
                            className={styles.linkTitle}
                            href="skype:live:artur0503915024"
                        >
                            Skype <br />
                            <span
                                className={styles.link}
                                href="skype:live:artur0503915024"
                            >
                                Artur Pazyniuk
                            </span>
                        </a>
                    </div>
                    <div className={styles.email}>
                        <a
                            className={styles.linkTitle}
                            href="mailto:PazyniukArtur@gmail.com"
                        >
                            Email
                            <br />
                            <span className={styles.link}>
                                PazyniukArtur@gmail.com
                            </span>
                        </a>
                    </div>
                    <div className={styles.socialIcons}>
                        <SocialIcons className={styles.icons} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
