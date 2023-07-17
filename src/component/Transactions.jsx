import axios from "axios";
import { useEffect, useState } from "react";
import Transaction from "./Transaction";

const API = process.env.REACT_APP_API_URL
function Transactions() {
    const [transaction, setTransaction] = useState([]);
    const [total, setTotal] = useState(null)
   // console.log(process.env)
   //console.log(API);
    
    
    useEffect(() => {
        axios.get(`${API}/transaction`)
        .then((res) => setTransaction(res.data))
        .catch((e) => console.log(e))
    },[])

    function addTotal() {
        let sum = 0;
        transaction.forEach((transaction) => {
            if (transaction.type === "Income") {
                sum += transaction.amount;
            } else if (transaction.type === "Expenses") {
                sum -= transaction.amount;
            }
        });
        setTotal(sum);
    }

    useEffect(() => {
        addTotal();
    }, [transaction]);


    return (
        <div className="tranasactions">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Bank Account Total: $ {total}</th>
                        </tr>
                    </thead> 
                    <tbody>{transaction.map((trans, index) => 
                        <Transaction 
                            key={trans.id} 
                            trans ={trans}
                            index={index}
                        />
                        )}
                    </tbody>
                </table>
            </section>       
        </div>
    )
}

export default Transactions;
