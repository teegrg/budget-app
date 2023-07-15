import axios from "axios";
import { useEffect, useState } from "react";
import Transaction from "./Transaction";

const API = process.env.REACT_APP_API_URL
function Transactions() {
    const [transaction, setTransaction] = useState([]);
   // console.log(process.env)
   //console.log(API);
    
    useEffect(() => {
        axios.get(`${API}/transaction`)
        .then((res) => setTransaction(res.data))
        .catch((e) => console.log(e))
    },[])

    return (
        <div className="tranasactions">
            {transaction.map((trans) => {
            return    <Transaction 
                    key={trans.id} 
                    trans ={trans}/>

                })
            }
        </div>
    )
}

export default Transactions;
