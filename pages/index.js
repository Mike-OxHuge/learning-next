import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="bollocks" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          veniam ea est vel error id molestias? Doloribus, fugit expedita porro
          quos ea corrupti laudantium sed. Nesciunt non explicabo molestiae
          iusto eos eum alias. Autem blanditiis maxime non. Nam laboriosam nobis
          eveniet voluptate eum reiciendis enim ex, quod, mollitia, ut neque!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga soluta
          natus quam iste corrupti veritatis vitae magnam necessitatibus,
          consectetur quae ratione repellat et voluptates sapiente itaque porro
          ducimus mollitia molestias perferendis dignissimos perspiciatis maxime
          ad sint? Non, sint. Voluptatem reiciendis labore quia corporis aut.
          Facilis, incidunt! Tempora voluptates itaque quam.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>Ninjas</a>
        </Link>
      </div>
    </>
  );
}
