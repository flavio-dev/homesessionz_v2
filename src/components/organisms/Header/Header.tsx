import Link from "next/link";
import Logo from "@/components/atoms/Logo";
// import SearchContainer from 'components/SearchContainer'
import styles from "./Header.module.css";

export const Header = () => (
  <div className={styles.header}>
    <div className={`default-wrapper-width ${styles.headerInner}`}>
      <div className={styles.headerTitle}>
        <Link href="/">høme sessiønz</Link>
      </div>
      <Link href="/">{<Logo />}</Link>
      <div className={styles.headerSearch}>
        green{/* <SearchContainer /> */}
      </div>
    </div>
  </div>
);

export default Header;
