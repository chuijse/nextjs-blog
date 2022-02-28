import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";


// pages/index.tsx
import prisma from '../lib/prisma';



export default function Home({feed}) {

  console.log(feed)
  return (
    <Layout >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, Im <b>Cristian Huijse</b> a Industrial designer and Front-end
          developer{" "}
        </p>
        
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {feed.map(( f, i) => (
            <li className={utilStyles.listItem} key={f.id}>
              <Link href={`/posts/${f.id}`}>
                <a>{f.title}</a>
              </Link>
              <br />
              <small>Author Name: <b>{f.author?.name}</b> </small>
               <br />
              <small>Email: {f.author?.email}</small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include:{
      author: {
        select:{
          name: true,
          email: true
        } 
      }
    },
  });
  return { props: {feed}  };
  
};

/*export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}*/
