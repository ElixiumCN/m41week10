import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import styled from   'styled-components';
// import Navbar from "./pages/Components/Cart";
import Home from "./pages/Homecats";
import Cats from "./pages/Cats";
import Checkout from "./pages/Checkout";
// import Header from './pages/Components/Sidebar';
// import form
import Register from "./pages/Components/Register";

function clicker() {
    console.log("hello");
    
    };
    
    clicker();

const App = () => {

    <div>

    </div>

    return (
        
        <div>
            <h1>Register</h1>
            <Register />


            <BrowserRouter>
{/* <Navbar /> */}


            <nav>
                    {/* <NavLink to="/"><button className="buttontwo" onClick="clicker()">Home</button></NavLink> */}
                    <NavLink to="/cats"><button className="buttontwo" onClick="clicker()">Catgram</button></NavLink>
                    {/* <NavLink to="/checkout"><button className="buttontwo" onClick="clicker()">Basket</button></NavLink> */}

                    </nav>
                

                <Routes>
                    
                    <Route path="/" element={ <Home /> } />
                    <Route path="/cats" element={ <Cats /> } />
                    <Route path="/checkout" element={  <Checkout /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );

}



export default App;

// how to style the link component using styled components
const NavLink = styled(Link)`
padding: 10px;
`
