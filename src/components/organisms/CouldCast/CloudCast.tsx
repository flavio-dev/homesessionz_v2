import Link from "next/link";

import styles from "./CloudCast.module.css";
import Image from "next/image";

export const CloudCast = ({ mix }: ICloudCastProps) => {
  return (
    <div className={styles.cc}>
      <Image
        src={mix.pictures.extra_large}
        alt={`image of ${mix.name}`}
        width={600}
        height={600}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <p>{mix.name}</p>

      <Link href={mix.slug}>{mix.slug}</Link>
    </div>
  );
};

export default CloudCast;
