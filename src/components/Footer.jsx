import React from 'react'

/**
 * Composant pour afficher le pied de page avec l'année actuelle.
 *
 * @returns {JSX.Element} - Le composant du pied de page.
 */
const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer> Wealth Health &copy; {currentYear}</footer>
  )
}

export default Footer