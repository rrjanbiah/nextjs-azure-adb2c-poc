import { useSession } from "next-auth/react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
      <Head>
        <title>Next.js Azure ADB2C PoC in Next 14 (pages router)</title>
        <meta
          name="description"
          content="Next.js Azure ADB2C PoC in Next 14 (pages router)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>Next.js Azure ADB2C PoC in Next 14 (pages router)</p>
          <p>Login Status: {status}</p>
        </div>
        {session ? (
          <>
            <div className={styles.grid}>
              You are Logged in! {JSON.stringify(session)}
            </div>
          </>
        ) : (
          <div>
            You are not Logged in <Link href="/api/auth/signin">Login Now</Link>
          </div>
        )}
      </main>
    </>
  );
}
