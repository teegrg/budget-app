import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const { v4: uuidv4 } = require("uuid");

const API = process.env.REACT_APP_API_URL



function NewTransactionForm() {
    const navigate = useNavigate()

    const [newTransaction, setNewTransaction] = useState({
        id: uuidv4(),
        item_name : "",
        amount : 0,
        date : "",
        from : "",
        category : ""
    })

    const newTrans = () => {
        axios
        .post(`${API}/transaction`, newTransaction)
        .then(() => {
            navigate("/transaction")
        })
        .catch((e) => console.log(e));    
    }

    const handleTextChange = (event) => {
        setNewTransaction({...newTransaction, [event.target.id] : event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        newTrans();

    }
    return (
        <div className="edit">
            <h1 className="center">Add a new item</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="itemName">Name:</label>
                <input 
                    id="item_name"
                    value={newTransaction.item_name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="name"
                 />
                <label htmlFor="amount">Amout:</label>
                <input 
                    id="amount"
                    value={newTransaction.amount}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="amout"
                    required
                 />
                <label htmlFor="date">Date:</label>
                <input 
                    id="date"
                    value={newTransaction.date}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="date"
                    required
                 />
                <label htmlFor="from">From:</label>
                <input 
                    id="from"
                    value={newTransaction.from}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="from"
                 />
                <label htmlFor="category">Category:</label>
                <input 
                    id="category"
                    value={newTransaction.category}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="category"
                    required
                 />
                 <button className="btnNewForm">CREATE A NEW ITEM</button>
            </form>
        </div>
    )
}

export default NewTransactionForm;