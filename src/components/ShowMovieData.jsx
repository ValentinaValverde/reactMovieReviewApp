import styled from 'styled-components'
import React, {useState} from "react"
import {StarRating} from "./StarRating"

const MovieCard = styled.div`
    background-color: #588157;
    color:#344E41;
    margin: 20px;
    border-radius: 20px;
    width: 90%;
`

export const ShowMovieData = ({ movieObject, movieValue }) => {
    const [review, setReview] = useState("")
    const [reviewValue, setReviewValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        setReview(reviewValue)
    }
    console.log(reviewValue);

    const handleChange = (event)  => {
        event.preventDefault();
        setReviewValue(event.target.value)
    }

    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Onest&family=Righteous&family=Varela+Round&display=swap');
            </style>

            <p>movies will appear below:</p>

                {movieObject.map((movieObject, index) =>
                    <MovieCard>

                        <div key={index} className='container'>
                            <div className='image'>
                                <img src={movieObject.Poster}></img>
                            </div>

                            <div className='movieInfo'>
                                <h2>{movieObject.Title}</h2>
                                <p>{movieObject.Genre}</p>
                                <p>{movieObject.Runtime}</p>
                                <p>{movieObject.Plot}</p>
                            </div>
                        </div>

                        <form className='reviewSection'>
                            <h2>review</h2>
                            {/* <StarRating /> */} {/* it's a work in progress */}
                            <p>{review}</p>
                            <input className="reviewInput" type="text" placeholder='type in your review here:' onChange={handleChange}></input>
                            <br />
                            <button type="submit" onClick={handleSubmit}>submit review</button>
                        </form>

                    </MovieCard>
                )
            }

        </>
    )
}
