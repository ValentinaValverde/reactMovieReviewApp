import { FaStar } from 'react-icons/fa'
import React, { useState } from "react"


export const StarRating = () => {
    const [rating, setRating] = useState('')

    const ratingVal = (index + 1);

    const handleClick = () => {
        setRating(ratingVal);
    }

    return (
        <>
            <p>Hello!!!</p>
            <FaStar className='star' />
            <FaStar className='star' />

            <input 
                type="radio"
                value={ratingValue}
                onClick={handleClick}
            ></input>

{/* 
            <div>

                {[...Array(5)].map((star, index) => {
                    <label>
                        <input type="radio"></input>
                        <FaStar className='star' />
                    </label>
                
            })}
            </div> */}
        </>
    )
}

