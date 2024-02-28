import Layout from "../components/layout";
import Head from "next/head"

export default function Home() {

    return (
        <Layout
            title="Unreal Reel Insights!"
            subtitle="Explore in-depth information on the movies you love...">
            <Head>
                <title>Movie App</title>
            </Head>

        </Layout>
    )
}