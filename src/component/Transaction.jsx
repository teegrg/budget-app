import { Link } from "react-router-dom";

function Transaction ({trans, index}) {
   // console.log(trans.id)
    return (
        <tr className="transaction">
            <td>{trans.date}</td>
            <td><Link to={`/transaction/${index}`}>{trans.category}</Link></td>
            <td>{trans.type === "Expenses" ? "-" : ""}{trans.amount}</td>
           
        </tr>
    )
    
}

export default Transaction;