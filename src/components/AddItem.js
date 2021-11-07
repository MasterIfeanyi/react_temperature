
const AddItem = ({ allItems, setAllItems, showTable, setShowTable,
  price, setPrice, product, setProduct, handleSubmit }) => {
       
    


  return (
    <form className='add-form' onSubmit={(e) => e.preventDefault()}>
        
      <div className='form-control'>
        <label><h3>Product</h3></label>
        <input
          type='text'
          placeholder='Add Product'
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        </div>
          
      <div className='form-control'>
        <label><h3>Price</h3></label>
        <input
          type='number'
          placeholder='Enter Price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <input type='submit' onClick={handleSubmit} value='Save Product' className='btn btn-block' />

    </form>
  )
}

export default AddItem
