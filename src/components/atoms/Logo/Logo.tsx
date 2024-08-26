import HIcon from "./HIcon";
import SIcon from "./SIcon";
import SlashIcon from "./SlashIcon";

import styles from "./Logo.module.css";

export const Logo = () => (
  <div className={styles.logo}>
    <SlashIcon />
    <HIcon />
    <SIcon />
  </div>
);

export default Logo;
