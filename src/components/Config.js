//export const USER_SERVER = "/api/users";

//export const API_URL = "https://api.themoviedb.org/3/";
//export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
//export const API_KEY = "65392f8691a0611f13753784ee967687";


// https://api.themoviedb.org/3/movie/157336?api_key=65392f8691a0611f13753784ee967687

const KEY = "65392f8691a0611f13753784ee967687"
const URL = "https://api.themoviedb.org/3/movie/"

const [loading, setLoading] = useState(true);
const [movies, setMovies] = useState([])
const getMovies = async () => {
    const json = await (
        await fetch(
            `${URL}popular?api_key=${KEY}`)
    ).json();
    setMovies(json.results);
    setLoading(false);

}

useEffect(() => {
    getMovies();
}, [])

return (
    <div>
        {loading ? <h1>Loading...</h1> :
            <div>{movies.map(movie =>
                <Movie
                key={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                genre_ids={movie.genre_ids}
                />)} </div>}
    </div>
);

export default Config;