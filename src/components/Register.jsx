import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = ({ usersList }) => {
    const [users, setUsers] = usersList;
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        for(const user of users) {
            if(e.target.email.value === user.email) {
                setIsError(true);
                return;     
            }
        }

        const newUser = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            students: []
        }

        e.target.reset();

        setUsers(prev => {
            const newUsersList = prev.filter(curValue => Object.keys(curValue).length > 0);
            localStorage.setItem("users", JSON.stringify([...newUsersList, newUser]));
            return [...newUsersList, newUser];
        });

        setIsError(false);
        navigate("/authorization");
    }


    return (
        <div className="reg-log">
            <img src="./images/logo.png" alt="logo" />
            <div className="reg-log-div">
                <h1>Goal-Oriented-Academy</h1>
                <form onSubmit={handleSubmit}>
                    <h2 style={{textAlign: "center"}}>Register</h2>
                    <div className="input-div">
                        <label htmlFor="firstname">Firstname:</label>
                        <input type="text" name="firstname" id="firstname" placeholder="Enter your firstname" required />
                    </div>
                    <div className="input-div">
                        <label htmlFor="lastname">Lastname:</label>
                        <input type="text" name="lastname" id="lastname" placeholder="Enter your lastname" required />
                    </div>
                    <div className="input-div">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-div">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <button className="green-btn">Register</button>
                    <p>Already have an account? <span><Link to="/authorization">Sign In</Link></span></p>
                    <p className="error-p">{ isError ? "Email is already existed" : ""}</p>
                </form>
            </div>
        </div>
    );
}

export default Register;