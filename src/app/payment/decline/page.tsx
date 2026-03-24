import styles from "../payment-status.module.scss";
import Image from "next/image";
import pciDssLogo from "@/assets/icons/pci-dss-compliant-logo-vector.svg";
import visaLogo from "@/assets/icons/visa-logo.svg";
import mastercardLogo from "@/assets/icons/mastercard-logo.svg";

export default function Decline() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={`${styles.icon} ${styles.decline}`}>✕</div>
                <h1 className={styles.title}>Payment failed</h1>
                <p className={styles.text}>
                    Unfortunately, the payment was declined.<br />
                    Please try again or use another card.
                </p>
                <a href="/pricing" className={styles.button}>
                    Try again
                </a>
                <div className={styles.badges}>
                    <Image src={visaLogo} alt="Visa" width={44} height={28} />
                    <Image src={mastercardLogo} alt="Mastercard" width={44} height={28} />
                    <Image src={pciDssLogo} alt="PCI DSS Compliant" width={56} height={28} />
                </div>
            </div>
        </div>
    );
}
