import MovieCard from "./MovieCard";
import { useEffect, useState } from 'react'

const PopularMovie = ({ movies }) => {

    const [filterMovie, setFilterMovie] = useState([])
    const [filters, setFilters] = useState({
        s: ''
    })

    const search = (s) => {
        setFilters({
            s
        })
    }

    useEffect(() => {

        let movie = movies.filter(movie => movie.title.indexOf(filters.s) >= 0)

        setFilterMovie(movie)

    }, [filters])

    return (
        <>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <input
                        type="search"
                        className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        mt-5
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                        id="search"
                        placeholder="Search Movie"
                        onKeyUp={e => search(e.target.value)}
                    />
                </div>
            </div>
            <div className="container max-w-7xl mx-auto pb-10 px-4">
                <h1 className="text-gray-700 text-2xl mt-8 mb-5"> Popular Movies </h1>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {filterMovie.map(movie => <MovieCard movie={movie} key={movie.id} />)}
                </div>
            </div>
        </>
    );
};

export default PopularMovie;