import Image from "next/image";
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <Image src="/images/personal/logo.svg" alt="" width={66} height={64} loading="eager" />
      <p>404</p>
      <h1>This page isn&apos;t part of the collection.</h1>
      <Link href="/#portfolio">Return to the portfolio</Link>
    </main>
  );
}
