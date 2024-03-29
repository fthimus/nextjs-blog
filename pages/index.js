import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date.js'
import Layout, {siteTitle} from '../components/layout.js'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts.js'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Self Introduction, <a href="https://twitter.com">Twitter</a></p>
                <p>
                    (This is a sample website - you'll be building a site like this on {' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.listItem}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
                <Link href={`/api/hello`}>
                    <a className={utilStyles.headingMd}>hello api</a>
                </Link>
            </section>
        </Layout>
    )
}