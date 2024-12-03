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
        <>
            <div className='admin-panel'>
                <div className='email-data'>
                    <h1>Email Data</h1>
                    <p>Here you can view all the emails that have been sent.</p>
                    <button onClick={() => navigate('/admin/emails')}>View Emails</button>
                </div>
                <div className='articles-data'>
                    <h1>Articles Info</h1>
                    <p>Here you can view all the articles that have been created.</p>
                    <button onClick={() => navigate('/admin/articles')}>View Articles</button>
                </div>
            </div>
            <footer>
                <LogoutButton />
            </footer>
        </>
    );
}

export default Admin;