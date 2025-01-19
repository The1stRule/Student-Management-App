import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Authorization = ({ users, setCurUser }) => {
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSumbit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        for(const user of users) {
            if(user.email === email && user.password === password) {
                e.target.reset();
                setIsError(false);
                setCurUser(user);
                navigate("/");
            }
        }

        setIsError(true);
    }

    return (
        <div className="reg-log">
            <img src="./images/logo.png" alt="logo" />
            <div className="reg-log-div">
                <h1>Goal-Oriented-Academy</h1>
                <form onSubmit={handleSumbit}>
                    <h2 style={{textAlign: "center"}}>Authorization</h2>
                    <div className="input-div">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-div">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <button className="green-btn">Authorization</button>
                    <p>Don't have an account? <span><Link to="/register">Sign up</Link></span></p>
                    <p className="error-p">{ isError ? "User not found" : ""}</p>
                </form>
            </div>
        </div>
    );
}

export default Authorization;