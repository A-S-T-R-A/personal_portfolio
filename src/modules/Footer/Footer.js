import { SocialIcons } from "modules/common/components/SocialIcons"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.wrapper} id="footer">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.phone}>
                        <h4 className={styles.linkTitle}>Skype</h4>
                        <a
                            className={styles.link}
                            href="skype:live:artur0503915024"
                        >
                            Artur Pazyniuk
                        </a>
                    </div>
                    <div className={styles.email}>
                        <h4 className={styles.linkTitle}>Email</h4>
                        <a
                            className={styles.link}
                            href="mailto:PazyniukArtur@gmail.com"
                        >
                            PazyniukArtur@gmail.com
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
