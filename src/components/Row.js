import {FaTimes} from "react-icons/fa"

const Row = ({item, onDelete}) => {
    return (
        <tr>
            <td>{item.product}</td>
            <td>{`$`} {item.price}</td>
            <td><button onClick={() => onDelete(item.id)}><FaTimes/></button></td>
        </tr>
    )
}

export default Row
