import Link from "next/link";
import Logo from "@/components/atoms/Logo";
import SearchBar from "@/components/molecules/SearchBar";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`default-wrapper-width ${styles.headerInner}`}>
        <div className={styles.headerTitle}>
          <Link href="/">høme sessiønz</Link>
        </div>
        <Link href="/">{<Logo />}</Link>
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
