import Header from './components/Header'
// import Input from './components/Input'
import SlideShow from './components/SlideShow'

import {useState, useEffect} from 'react'


const App = () => {


  const [nameOfBreeds, setNameOfBreeds] = useState([])
  const [imagesOfABreed, setImagesOfABreed] = useState([])
  const [breedName, setBreedName] = useState('')


  useEffect(() => {

    const start = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/list/all")
      const data = await response.json()
      console.log(data.message)
      setNameOfBreeds(data.message)
  }

    start()
  }, [])


  const loadByBreed = async (breed) => {
    if (breed !== "Choose a dog breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        setImagesOfABreed(data.message)
    }
}


  return (
    <div className="container">
      <Header
        nameOfBreeds={nameOfBreeds}
        setNameofBreds={setNameOfBreeds}
        loadByBreed={loadByBreed}
        setBreedName={setBreedName}
      />
      {/* <Input
        nameOfBreeds={nameOfBreeds}
        setNameofBreds={setNameOfBreeds}
        loadByBreed={loadByBreed}
        setBreedName={setBreedName}
      /> */}
      <SlideShow
        breedName={breedName}
        imagesOfABreed={imagesOfABreed}
      />
    </div>
  )
}

export default App
