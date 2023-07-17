import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function TransactionEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [transaction, setTransaction] = useState({
        item_name : "",
        amount : 0,
        date : "",
        from : "",
        category : ""
    });

    const updateTransaction = () => {
        // console.log('API:', API);
        // console.log('id:', id);
        // console.log('transaction:', transaction);
        axios
        .put(`${API}/transaction/${id}`, transaction)
        .then((res) => {
            setTransaction(res.data); 
             navigate(`/transaction/${id}`);
        })
        .catch((e) => console.log(e));
    };

    const handleTextChange = (event) => {
        setTransaction({...transaction, [event.target.id] : event.target.value })
    }

    const handleDelete = () => {
        axios
        .delete(`${API}/transaction/${id}`)
        .then(() => navigate(`/transaction`))
        .catch((e) => console.log(e))
    };

    useEffect(() => {
        axios
        .get(`${API}/transaction/${id}`)
        .then((res) => setTransaction(res.data))
        .catch((e) => console.log(e))
    },[id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateTransaction();
    }
    return (    
        <div className="edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="itemName">Item Name:</label>
                <input 
                    id="item_name"
                    value={transaction.item_name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="item name"
                 />
                <label htmlFor="amount">Amout:</label>
                <input 
                    id="amount"
                    value={transaction.amount}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="amout"
                    required
                 />
                <label htmlFor="date">Date:</label>
                <input 
                    id="date"
                    value={transaction.date}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Date"
                    required
                 />
                <label htmlFor="from">From:</label>
                <input 
                    id="from"
                    value={transaction.from}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="from"
                 />
                <label htmlFor="category">Category:</label>
                <input 
                    id="category"
                    value={transaction.category}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="category"
                    required
                 />
                 <br />
                 <input type="submit" />
            </form>
            <br />
            <div className="showNavigationEdit">
                <Link to={`/transaction/${id}`}>
                    <button>Cancel</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </div>    
        </div>

    )
}

export default TransactionEdit;
