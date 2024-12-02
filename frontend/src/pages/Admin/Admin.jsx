import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Admin.css';
function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token
        navigate('/login'); // Redirect to login page
    };

    return <button onClick={handleLogout}>Logout</button>;
}


const Admin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/admin'); // Redirect to admin panel if token exists
        }
    }, [navigate]);

    return (
        <div className='admin-panel'>
            <h1>Admin Panel</h1>
            <p>Welcome to the admin panel</p>
            <LogoutButton />
        </div>
    );
}

export default Admin;