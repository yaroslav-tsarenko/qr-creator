import styles from "../payment-status.module.scss";
import Image from "next/image";
import pciDssLogo from "@/assets/icons/pci-dss-compliant-logo-vector.svg";
import visaLogo from "@/assets/icons/visa-logo.svg";
import mastercardLogo from "@/assets/icons/mastercard-logo.svg";

export default function Pending() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={`${styles.icon} ${styles.pending}`}>⏳</div>
                <h1 className={styles.title}>Payment pending</h1>
                <p className={styles.text}>
                    We are waiting for payment confirmation.<br />
                    This may take a few minutes.
                </p>
                <a href="/pricing" className={styles.button}>
                    Back to pricing
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
