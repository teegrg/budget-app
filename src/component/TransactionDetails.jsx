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
           <h3>{transaction.id}</h3> 
           <h3>{transaction.item_name}</h3>
           <h3>{transaction.amount}</h3>
           <h3>{transaction.date}</h3>
           <h3>{transaction.from}</h3>
           <h3>{transaction.category}</h3>
           <button><Link to={`/transaction/${id}/edit`} >Edit</Link></button>
           <button><Link to= {`/transaction`}>Back</Link></button>
        </div>
    )
}

export default TransactionDetails;