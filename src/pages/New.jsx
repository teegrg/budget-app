import { Link } from "react-router-dom";
import NewTransactionForm from "../component/NewTransactionForm";

function New() {
    return (
        <div>
            <NewTransactionForm/>
            <Link to="/transaction"><button>Back</button></Link>
        </div>
    )
}

export default New;