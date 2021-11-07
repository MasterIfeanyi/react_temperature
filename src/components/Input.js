const Input = ({nameOfBreeds, setBreedName, loadByBreed}) => {
    return (
        <>
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
        </>
    )
}

export default Input
