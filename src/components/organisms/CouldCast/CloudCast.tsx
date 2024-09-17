import Link from "next/link";

import styles from "./CloudCast.module.css";

export const CloudCast = ({ mix }: ICloudCastProps) => {
  return (
    <div className={styles.cc}>
      <p>{mix.name}</p>
      <Link href={mix.slug}>{mix.slug}</Link>
    </div>
  );
};

export default CloudCast;
