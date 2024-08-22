import Link from "next/link";

import styles from "./Footer.module.css";

// import InstaIcon from "components/InstaIcon";
// import MixcloudIcon from "components/MixcloudIcon";
// import HeartIcon from "components/HeartIcon";

// import thisYear from "utils/thisYear";

export const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footerLinks}>
      <Link href="/about">abøut</Link>
      <Link href="/contact">cøntact</Link>
    </div>
  </div>
);

export default Footer;
