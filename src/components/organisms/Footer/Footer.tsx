import Link from "next/link";

import styles from "./Footer.module.css";
import thisYear from "@/utils/thisYear";

import HeartIcon from "@/components/atoms/HeartIcon";
import InstaIcon from "@/components/atoms/InstaIcon";
import MixcloudIcon from "@/components/atoms/MixcloudIcon";

export const Footer = () => (
  <div className={styles.footer}>
    <div className={`default-wrapper-width ${styles.footerInner}`}>
      <div className={styles.footerTopLine}>
        <div className={styles.footerLinks}>
          <Link href="/about">abøut</Link>
          <Link href="/contact">cøntact</Link>
        </div>
        <div className={styles.footerMedia}>
          <Link href="https://www.instagram.com/homesessionz/" target="_blank">
            <InstaIcon />
          </Link>
          <Link href="https://www.mixcloud.com/homesessionz/" target="_blank">
            <MixcloudIcon />
          </Link>
        </div>
      </div>
      <div
        className={
          false
            ? `${styles.footerBottomLine} ${styles.footerBottomLineExtraSpace}`
            : `${styles.footerBottomLine}`
        }
      >
        <div className={styles.footerText}>
          made with <HeartIcon /> by{" "}
          <a href="https://github.com/flavio-dev">flavio-dev</a>
        </div>
        <div>copyrights {thisYear()}</div>
      </div>
    </div>
  </div>
);

export default Footer;
