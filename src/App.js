import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import styled from   'styled-components';
// import Navbar from "./pages/Components/Cart";
import Home from "./pages/Homecats";
import Cats from "./pages/Cats";
import Checkout from "./pages/Checkout";
// import Header from './pages/Components/Sidebar';
// import form
import {useState} from 'react'
import Register from "./pages/Components/Register";
import DeleteTheUser from "./pages/Components/DeleteTheUser";
import ReadUsers from "./pages/Components/ReadUsers";
// import Login from "./pages/Components/Login";
import UpdateUser from "./pages/Components/UpdateUser";
import DeleteUser from "./pages/Components/DeleteUser";
import Login from "./pages/Components/Login";
import { getCookie } from "./pages/common"
import {findUser} from "./pages/common"
import { useRef } from "react";

function clicker() {
    console.log("hello");
    
    };
    
    clicker();

const App = () => {
    const [user, setUser] = useState()
    
    useEffect(() =>{
        let cookie = getCookie("jwt_token")
        if (cookie) !== false) {
            loginWithToken(cookie)
        }
    },[])

const loginWithToken = async(cookie)=> {
    const user = await findUser(cookie)
    setUser(user)
}


    return (
        
        <div>
            <h1>Account management</h1>
            <Register setter={setUser} />
            <Login setter={setUser} />
            <DeleteTheUser setter={setUser} />
            <ReadUsers />



            {/* conditional rendering */}
            {user ?
            <div>
                {/* tested: Register new user and then the update user form appears 
                test next: login & update user form appears
                */
                }
                <h2>Hello welcome {user}</h2>
                {/* <ReadUsers /> */}
                <UpdateUser user={user}/>
                <DeleteUser user={user}/>

            </div>
                : 
                <h2>Please login</h2>
            }
            

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

};



export default App;

// how to style the link component using styled components
const NavLink = styled(Link)`
padding: 10px;
`
