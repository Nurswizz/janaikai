import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AdminLogin() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
                email: email.value,
                password: password.value,
            });

            localStorage.setItem('token', data.token); 
            navigate('/admin'); 
        } catch (error) {
            setError(error.response.data.message);
            console.error(error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
        </form>
    );
}

export default AdminLogin;