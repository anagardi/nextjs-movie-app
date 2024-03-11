import Layout from "../../components/layout";
import MovieForm from "../../components/movie/form";

export default function Add() {

    return (
        <Layout
            title="Add Movie"
            subtitle="Expand Our Cinematic Universe. Add a New Movie to Our Database!">
                <MovieForm/>
        </Layout>
    )
}