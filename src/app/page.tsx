import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export const getMixes = async () => {
  const res = await fetch(`https://api.mixcloud.com/homesessionz/favorites/`, {
    cache: "force-cache",
  });
  const { data: mixes } = await res.json();

  // By returning { props: { mixes } }, the Home component
  // will receive `mixes` as a prop at build time
  return mixes;
};

export default async function Home() {
  const mixes = await getMixes();
  return (
    <main className={styles.main}>
      <ul>
        {mixes.map((mix) => (
          <li key={mix.key}>
            <Link href={mix.slug}>{mix.slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
