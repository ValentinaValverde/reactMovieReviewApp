import styled from 'styled-components'

const MovieCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    background-color: #CBD4C2;
    color: #50514F;
    border-radius: 20px;
    width: 90%;
    object-fit: fill;

    img{
        width: 300px;
        border-radius: 10px;
    }

    .movieInfo{
        width: 40%;
        text-align: left;
        height: auto;
    }

    h2{
        font-size: 50px;
    }
`

export const ShowMovieData = ({ movieObject, movieValue }) => {


    return (
        <>
            <p>movies will appear below:</p>

            {movieObject.map((movieObject, index) =>
                <MovieCard>
                    <div key={index}>
                        <figure>
                            <img src={movieObject.Poster}></img>
                        </figure>

                        <div className='movieInfo'>
                            <h2>{movieObject.Title}</h2>
                            <p>{movieObject.Genre}</p>
                            <p>{movieObject.Released}</p>
                            <p>{movieObject.Runtime}</p>
                            <p>{movieObject.Plot}</p>
                        </div>

                    <div>
                        <h2>review</h2>
                        <input type="text" placeholder='type in your review here:'></input>

                    </div>
                    </div>
                </MovieCard>
            )
            }

        </>
    )
}
