import React from 'react'
import { Link } from "react-router-dom";
import './navigation.css'
function navigation() {
  return (
    <div className='bg-dark text-white d-flex justify-content-between align-items-center px-4 navbar'>
        <h1 className='logo w-75 '>MyFilms</h1>
        <ul className='list-unstyled d-flex justify-content-around w-25 my-auto'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/movies'>Movies</Link></li>
            <li>Tv Shows</li>
            <li>Genres</li>
        </ul>
    </div>
  )
}

export default navigation;