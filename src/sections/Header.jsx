import { useState } from 'react'
import SearchBar from '../components/SearchBar'

function Header() {
  return <section>
    <header className='header'>
        <img src="hero.png" alt="movieCardLogo" />

        <h1>Find <span className='text-gradient'>Movies</span> You’ll Love Without the Hassle</h1>

        <SearchBar />
        </header>
    </section>
}

export default Header
