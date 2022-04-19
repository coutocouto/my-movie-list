import Head from "next/head";

const Meta = ({ keywords, description, title }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/images/favicon.svg" />
            <title>{title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    title: 'MyMovieList',
    keywords: 'movie app, fre movies, popular movies',
    description: 'Search movies free'
}

export default Meta;