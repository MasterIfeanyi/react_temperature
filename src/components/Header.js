import PropTypes from 'prop-types'
// import { useLocation } from 'react-router-dom'


const Header = ({ title, nameOfBreeds, setBreedName, loadByBreed}) => {
//   const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      <select onChange={(e) => {
      loadByBreed(e.target.value)
      setBreedName(e.target.value)
      }
    }>
      <option>Choose a dog breed</option>

      {Object.keys(nameOfBreeds).map(breed => (

          <option key={breed}>{ breed }</option>

      ))}
    </select>
    </header>
  )
}

Header.defaultProps = {
  title: 'Dog API',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
