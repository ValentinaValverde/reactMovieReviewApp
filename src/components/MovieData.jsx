import {ShowMovieData} from "./ShowMovieData"
import {useState} from "react";

export const MovieData = () => {
    const [movieObject, setMovieObject] = useState([]);
    const [movieValue, setMovieValue] = useState('');


    const getMovie = async (movie) => {
        const response = await fetch (`https://www.omdbapi.com/?t=${movie}&apikey=49d9943b`);
        const data = await response.json();

        console.log("DATA: ", data)
        setMovieObject([data, ...movieObject]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hello there!", movieValue)
        getMovie(movieValue);
    }

    const handleChange = (event) => {
        setMovieValue(event.target.value);
    }

    console.log("MOVIE OBJECT", movieObject);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> please type in movie title.
                    <br />
                    <input type="text" placeholder="movie title" value={movieValue} onChange={handleChange}></input>
                </label>
                <br />
                <button type="submit">generate movie info</button>
                <form>
                    <button type="submit">clear movies</button>
                 </form>
            </form>


            <ShowMovieData movieObject={movieObject} movieValue={movieValue}/>
        </> 
    )
}