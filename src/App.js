import { useAuth0 } from '@auth0/auth0-react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
    const { isAuthenticated, logout } = useAuth0();
  return (
    
    <div className="App">
        <h1>React App With Authentication</h1>
        <nav style={{
            borderBottom: 'solid 1px', 
            paddingBottom: '1rem'
        }}
        >
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/contact">Contact Us</Link> |{" "}
            <Link to="/members">Members</Link> 

            {isAuthenticated && <button onClick={() => logout({returnTo:window.location.origin})}>Logout</button>}
            
        </nav>
        <Outlet/>
    </div>
  );
}

export default App;
