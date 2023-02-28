import { SocialIcons } from "modules/common/components/SocialIcons"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.wrapper} id="footer">
            <div className={styles.container}>
                <div className={styles.content}>
                    <a
                        className={styles.phone}
                        href="skype:live:artur0503915024"
                    >
                        <span className={styles.linkTitle}>Skype</span>
                        <dr />
                        <span className={styles.link}>Artur Pazyniuk</span>
                    </a>
                    <a
                        className={styles.email}
                        href="mailto:PazyniukArtur@gmail.com"
                    >
                        <span className={styles.linkTitle}>Email</span>
                        <dr />
                        <span className={styles.link}>
                            PazyniukArtur@gmail.com
                        </span>
                    </a>
                    <div className={styles.socialIcons}>
                        <SocialIcons className={styles.icons} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
