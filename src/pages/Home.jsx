import { Link } from "react-router-dom"

function Home() {
    return (
        <div >
            <Link to="/transaction" className="main"><h3>Go To Transaction</h3></Link>
        </div>
    )
}

export default Home;