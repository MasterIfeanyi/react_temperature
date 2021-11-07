import Row from './Row'

const Table = ({ items, onDelete}) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <Row key={index} item={item} onDelete={onDelete} />
                    ))}
                </tbody>
            </table>            
        </div>
    )
}

export default Table
