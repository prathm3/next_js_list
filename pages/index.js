import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
      <title>Lists | Home</title>
      <meta name="keywords" content="Listings" />
    </Head>
    <div>
      <h1 className={styles.title}>HOme</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque velit
        sed saepe tempore reprehenderit eos ullam vitae dolore enim fuga!
      </p>
      <Link href="/listing">
        <a className={styles.btn}>See Listings</a>
      </Link>
    </div>
    </>
  );
}
