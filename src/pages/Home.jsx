import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="main">
            <Link to="/transaction"><h3>Transaction</h3></Link>
        </div>
    )
}

export default Home;