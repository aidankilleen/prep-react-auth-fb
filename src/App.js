import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
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
            <Link to="/contact">Contact Us</Link>
        </nav>
        <Outlet/>
    </div>
  );
}

export default App;
