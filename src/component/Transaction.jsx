import { Link } from "react-router-dom";

function Transaction ({trans, index}) {
   // console.log(trans.id)
    return (  
        <div className="transaction">
            <div className="cell date">{trans.date}</div>
            <div className="cell category">
                <Link to={`/transaction/${index}`} className="linkTran">{trans.category}</Link>
            </div>
            <div className="cell amount">
                {trans.type === "Expenses" ? "-" : ""}{trans.amount}
            </div>
        </div>


    )
    
}

export default Transaction;