import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from './pages/Home';
import NavBar from './component/NavBar';
import Index from './pages/Index';
import Show from "./pages/Show";
import Edit from "./pages/Edit"
import New from "./pages/New";
import FourOFour from  './pages/FourOFour'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element ={ <Home/> } />
          <Route path="/transaction" element = { <Index/> } />
          <Route path="/new" element={ <New/>} />
          <Route path="/transaction/:id" element={<Show/>} />
          <Route path="/transaction/:id/edit" element={<Edit/>} />
          <Route path="*" element = { <FourOFour/> } />
        </Routes>
      </Router>
   </>
  );
}

export default App;
