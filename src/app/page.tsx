"use client";
import { useContext } from "react";
import styles from "./page.module.css";
import CloudCast from "@/components/organisms/CouldCast/CloudCast";
import { MixesContext } from "@/contexts/mixesContext";

export default function Home() {
  const { mixes } = useContext(MixesContext);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {mixes.map((mix: IMix) => (
          <div className={styles.cloudcast} key={mix.slug}>
            <CloudCast mix={mix} />
          </div>
        ))}
      </div>
    </main>
  );
}
