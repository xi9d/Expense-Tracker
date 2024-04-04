import React, { useState } from 'react';

function Login() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your login logic here
        // For example, you can set the logged-in user based on the form input
        const username = e.target.elements.username.value;
        setLoggedInUser(username);
    };

    return (
        <div className="login-page">
            {/* Your login form */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" name="username" />
                <input type="password" placeholder="Password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
