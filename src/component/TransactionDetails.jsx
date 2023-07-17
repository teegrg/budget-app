import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL

function TransactionDetails() {
    const [transaction, setTransaction] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
       // console.log("ID:", id);
        axios
        .get(`${API}/transaction/${id}`)
        .then((res) => {
            setTransaction(res.data)
        })
        .catch((e) => navigate("/*"))
    },[id,navigate]);


    return (
        <div className="details">
           <p>Id:{transaction.id}</p> 
           <p>Name:{transaction.item_name}</p>
           <p>Amount:{transaction.amount}</p>
           <p>Date:{transaction.date}</p>
           <p>From:{transaction.from}</p>
           <p>Category:{transaction.category}</p>
           <p>Type:{transaction.type}</p>
           <div className="showNavigation">
            <button><Link to={`/transaction/${id}/edit`} className="link">Edit</Link></button>
            <button><Link to= {`/transaction`} className="link">Back</Link></button>
           </div>
        </div>
    )
}

export default TransactionDetails;