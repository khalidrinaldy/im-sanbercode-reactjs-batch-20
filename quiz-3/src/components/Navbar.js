import React, {useState, useEffect, useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import logo from '../images/logo.png';
import Home from './Home';
import About from './About';
import Login from './Login';
import BookListEditor from './BookListEditor';
import {AuthContext} from './Context/AuthProvider';

const Navbar = () => {
    const [isLoggin, setIsLoggin] = useContext(AuthContext);

    const handleLogout = () => {
        setIsLoggin(false);
    }

    function PrivateRoute ({ children, ...rest }) {
        return (
          <Route {...rest} render={() => {
            return isLoggin === true
              ? children
              : <Redirect to='/login' />
          }} />
        )
    }

    return (
        <Router>
            <div className="navbar">
                <img src={logo} />
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        
                        {isLoggin ? <li><Link to="/book-list-editor">Book List Editor</Link></li> : null}
                        
                        <li>
                            {isLoggin ? <button onClick={handleLogout} className="logout">Logout</button> : <Link to="/login">Login</Link>}
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <PrivateRoute exact path="/book-list-editor">
                    <BookListEditor />
                </PrivateRoute>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default Navbar;