import {ShowMovieData} from "./ShowMovieData"
import {useState} from "react";

export const MovieData = () => {
    const [movieObject, setMovieObject] = useState('');
    const [movieValue, setMovieValue] = useState('')


    const getMovie = async (movieObject) => {
        const response = await fetch (`https://www.omdbapi.com/?t=${movieObject}&apikey=49d9943b`);
        const data = await response.json();

        console.log("DATA: ", data)
        setMovieObject(data);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hello there!")
        getMovie(movieValue);
    }

    const handleChange = (event) => {
        setMovieValue(event.target.value);
    }

    console.log("MOVIE OBJECT", movieObject);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> Please type in movie title and date.
                    <br />
                    <input type="text" placeholder="movie title" value={movieValue} onChange={handleChange}></input>
                </label>
                <br />
                <button type="submit">generate movie info</button>
            </form>


            <ShowMovieData movieObject={movieObject} />

        </> 
    )
}