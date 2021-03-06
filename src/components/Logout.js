import React from 'react'
import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";



const Logout = () => {
    // const history = useHistory();
    const logout = (props) => {
        // console.log('Logout.js ln:10 props', props);
        window.localStorage.clear()
        window.location.href = '/'
        // const history = useHistory();
        // history.push('/')
        // history.push('/home')

    };

    
    return (
        <div>
                        <header>
                <h1 id="hide"> Water My Plants </h1>
                <nav>
                    {/* <span className="navspans"> */}
                        <Link to="/"> Home </Link>
                    {/* </span>
                    <span className="navspans"> */}
                        <Link to="/plantList"> My Plants </Link>
                    {/* </span>
                    <span className="navspans"> */}
                        <Link to="/meet-our-team"> Meet Our Team </Link>
                    {/* </span> */}
                </nav>
            </header>
            <h2>Whoa Cowgirl/Cowboy!</h2>
            <h2>Are you sure?</h2>
            <button onClick={logout}>DO IT! LOG ME OUT! </button>
        </div>
    )
}

export default Logout
