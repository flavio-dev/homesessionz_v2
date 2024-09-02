"use client";
import { useContext } from "react";
import Link from "next/link";
import Logo from "@/components/atoms/Logo";
import { MixesContext } from "@/contexts/mixesContext";
// import SearchContainer from 'components/SearchContainer'
import styles from "./Header.module.css";

export const Header = () => {
  const { mixes } = useContext(MixesContext);
  return (
    <div className={styles.header}>
      <div className={`default-wrapper-width ${styles.headerInner}`}>
        <div className={styles.headerTitle}>
          <Link href="/">høme sessiønz</Link>
        </div>
        <Link href="/">{<Logo />}</Link>
        <div className={styles.headerSearch}>{/* <SearchContainer /> */}</div>
      </div>
    </div>
  );
};

export default Header;
