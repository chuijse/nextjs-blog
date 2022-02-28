import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import prisma from '../../lib/prisma';


export default function Post({ post, ...props }){

  console.log(post)
  console.log(props)

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <br />
        <small><b>Post Content</b></small>
        <p>{post.content}</p>

        <small>Author Name: <b>{post.author?.name}</b> </small>
        <br />
        <small>Email: {post.author?.email}</small>
        {/*<div className={utilStyles.lightText}>
          <Date dateString={post.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />*/}
      </article>
    </Layout>
  );
}





export async function getServerSideProps(context)  {
  const { id } = context.params;
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id) ,
    },  
    include:{
      author: {
        select:{
          name: true,
          email: true
        } 
      }
    }
  });
  
  return {
    props: { post } ,
  };
};


/*export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}*/

/*export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
  // Fetch necessary data for the blog post using params.id
}*/
