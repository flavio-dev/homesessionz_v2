"use client";
import { useContext } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { MixesContext } from "@/contexts/mixesContext";

export default function Home() {
  const { mixes } = useContext(MixesContext);

  return (
    <main className={styles.main}>
      <ul>
        {mixes.map((mix: IMix) => (
          <li key={mix.slug}>
            <Link href={mix.slug}>{mix.slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
