import { Link } from "react-router-dom";

function Transaction ({trans}) {
    
    return (
        <div className="transaction">
            <div>{trans.date}</div>
            <div><Link to={`/transaction/${trans.id}`}>{trans.category}</Link></div>
            <div>{trans.type === "Expenses" ? "-" : ""}{trans.amount}</div>
            <hr />
        </div>
    )
    
}

export default Transaction;