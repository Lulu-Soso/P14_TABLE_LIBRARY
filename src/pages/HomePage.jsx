import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Composant de la page d'accueil.
 *
 * @returns {JSX.Element} - Le composant de la page d'accueil.
 */
const HomePage = () => {
  return (
    <div className='welcome-home'>
    <h1>Welcome to Wealth Health !</h1>
    <Link to="/employees/create">
      Create employee
    </Link>
    </div>
  )
}

export default HomePage