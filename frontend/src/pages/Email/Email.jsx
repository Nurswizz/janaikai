import axios from 'axios';
import { useState, useEffect } from 'react';
import './Email.css';
import { useNavigate } from 'react-router-dom';

const Email = () => {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/admin');
    }

    const getData = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setErrorMessage('User not authenticated. Please log in.');
                return;
            }

            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/admin/admin-panel/emails`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setData(response.data); // Assuming response.data is the object with "Count" and "Data"
        } catch (err) {
            console.error('Error:', err);
            setErrorMessage('Failed to fetch data.');
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='email-content'>
            <h3 style={{ color: "black" }}>
                Total Emails: {data.Count}
            </h3>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {data.Data && data.Data.length > 0 ? (
                <table className='email-table'>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.Data.map((emailData) => (
                            <tr key={emailData.ID}>
                                <td>{emailData.Email}</td>
                                <td>{new Date(emailData.CreatedAt).toLocaleString()}</td>
                                <td>{new Date(emailData.LastActivityAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                !errorMessage && <p>No email data available.</p>
            )}
            <button className='back-btn' onClick={handleClick}>Back</button>
        </div>
    );
};

export default Email;
