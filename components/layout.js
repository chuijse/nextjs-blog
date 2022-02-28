import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { signOut, useSession } from "next-auth/react";
//import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

export const siteTitle = " cHuijse Next.js Sample Website";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Cristian Huijse NEXT.js first website"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav>
        <div className="left">
          <Link href="/">
            <a className="bold">Feed</a>
          </Link>
          <Link href="/drafts">
            <a>My drafts</a>
          </Link>
        </div>
        <div className="right">
          <p></p>
          <Link href="/create">
            <button>
              <a>New post</a>
            </button>
          </Link>
          <button onClick={() => signOut()}>
            <a>Log out</a>
          </button>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}

/*{!home && (
  <div className={styles.backToHome}>
    <Link href="/">
      <a>← Back to home</a>
    </Link>
  </div>
)}*/

/*<nav>
        <div className="left">
          <Link href="/">
            <a className="bold">Feed</a>
          </Link>
          <Link href="/drafts">
            <a>My drafts</a>
          </Link>
        </div>
        <div className="right">
          <p></p>
          <Link href="/create">
            <button>
              <a>New post</a>
            </button>
          </Link>
          <button onClick={() => signOut()}>
            <a>Log out</a>
  </button>
        </div>
      </nav>*/
