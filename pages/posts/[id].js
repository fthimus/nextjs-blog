import Head from 'next/head'
import Layout from '../../components/layout.js'
import Date from '../../components/date.js'
import { getAllPostIds, getPostData } from '../../lib/posts.js'
import utilStyles from '../../styles/utils.module.css'

// To statically generate pages with dynamic routes, the page file must contain...

// getStaticPaths which returns an array of possible values for id
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

// getStaticProps which fetches necessary data for the post with id
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

// A react component to render this page
export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
            </article>
        </Layout>
    )
}
