import React from 'react'

function navigation() {
  return (
    <div className='bg-dark text-white d-flex justify-content-between align-items-center px-4'>
        <h1 className='logo w-75 '>MyFilms</h1>
        <ul className='list-unstyled d-flex justify-content-around w-25 my-auto'>
            <li>Home</li>
            <li>Movies</li>
            <li>Tv Shows</li>
            <li>Genres</li>
        </ul>
    </div>
  )
}

export default navigation;