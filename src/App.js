import Header from './components/Header'
import AddItem from './components/AddItem'
import Table from './components/Table'
import Button from './components/Button'
import {useState} from 'react'


const App = () => {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Item')));

  const [product, setProduct] = useState('')
  const [price, setPrice] = useState('')

  const [showTable, setShowTable] = useState(false)
  const [allItems, setAllItems] = useState([]);

  const [totalIncome, setTotalIncome] = useState(0)



    const addItem = (product, price) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const mynewItem = { id, product, price }
    const listItems = [...items, mynewItem];
    localStorage.setItem("Item", JSON.stringify(listItems))
    setItems(listItems)
  }


    const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!product) {
      alert('Please add a Product')
      return
    }
        
    addItem(product, price)
    setPrice('');
    setProduct('');
  }


  const onDelete = (id) => {
    const remainingItems = items.filter((item) => item.id !== id)
    localStorage.setItem("Item", JSON.stringify(remainingItems))
    setItems(remainingItems);
    sumTotal(remainingItems)
  }


  const sumTotal = (items) => {

    
    const totalPrice = items.reduce((total, item) => {
      return total + parseInt(item.price)
    }, 0)

    console.log(totalPrice)
    setTotalIncome(totalPrice)
  }

  return (
    <div className="container">
      <Header />
      <AddItem
        showTable={showTable}
        setShowTable={setShowTable} 
        allItems={allItems}
        setAllItems={setAllItems}
        price={price}
        setPrice={setPrice}
        product={product}
        setProduct={setProduct}
        handleSubmit={handleSubmit}
      />

      <Button
        items={items}
        sumTotal={sumTotal}
        totalIncome={totalIncome}
        setTotalIncome={setTotalIncome} />

      <Table items={items} onDelete={onDelete} />
    </div>
  )
}

export default App
