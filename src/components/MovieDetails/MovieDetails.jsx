import {useSelector} from 'react-redux';


function MovieDetails(){
    const movie = useSelector(store => store.selectedMovieDetails);
    return (
        <div>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}></img>
            <p>{movie.description}</p>
        </div>
    )
}

export default MovieDetails;