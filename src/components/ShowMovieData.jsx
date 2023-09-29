
export const ShowMovieData = ({movieObject}) => {


    return (
        <>
            <p>movies will appear below:</p>
            <p>{movieObject.Title}</p>
            <p>{movieObject.Genre}</p>
            <p>{movieObject.Released}</p>
            <p>{movieObject.Runtime}</p>
            <p>{movieObject.Plot}</p>
            <img src={movieObject.Poster}></img>
        </>
    )
}
