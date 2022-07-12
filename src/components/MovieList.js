import React from 'react'

export default function MovieList({movies,favouriteComponent}) {
	const FavouriteComponent = favouriteComponent;
  return (
    <>
			{movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster}  index={index} alt='movie'></img>
					<div className='overlay d-flex align-items-center justify-content-center'>
					<FavouriteComponent />
					</div>
				</div>
			))}
		</>
  )
}
