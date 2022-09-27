import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/about';
import Contact from './routes/contact';
import Login from './routes/login';
import Members from './routes/members';
import { Auth0Provider } from '@auth0/auth0-react';
import Logout from './routes/logout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Auth0Provider 
            domain="dev-580a4kic.eu.auth0.com"
            clientId="o5JEa3lTS6p41A7AINWHsK2yGP1BRQPK"
            redirectUri={window.location.origin + '/members'}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="/about" element={<About />}/>
                        <Route path="/contact" element={<Contact />}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/members" element={<Members/>}/>
                        <Route path="/logout" element={<Logout/>}/>
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </Auth0Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
