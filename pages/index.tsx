import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HOMEPAGE</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo
        cupiditate maxime! Perferendis adipisci nihil atque molestias voluptates
        omnis natus!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo
        cupiditate maxime! Perferendis adipisci nihil atque molestias voluptates
        omnis natus!
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
