import { useState } from 'react';
import axios from 'axios';

const ApiComponent = () => {
    const [apiKey, setApiKey] = useState(''); // To store user's input API key
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Handle API Key input change
    const handleApiKeyChange = (event) => {
        setApiKey(event.target.value);
    };

    // Handle API Fetch when user submits the form
    const handleFetchData = async () => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await axios.get('http://localhost:5000/admin', {
                headers: {
                    'x-api-key': apiKey, // Use the user's input API key here
                    'Content-Type': 'application/json',
                },
            });
            setData(response.data);
        } catch (error) {
            setError('Error: ' + error.message);
        }
        setIsLoading(false);
    };

    return (
        <div>
            <h1>API Data Fetch Example</h1>

            {/* Input Form to Enter API Key */}
            <div>
                <input
                    type="text"
                    placeholder="Enter your API key"
                    value={apiKey}
                    onChange={handleApiKeyChange}
                    style={{ marginRight: '10px' }}
                />
                <button onClick={handleFetchData} disabled={!apiKey}>
                    Fetch Data
                </button>
            </div>

            {/* Loading Indicator */}
            {isLoading && <p>Loading...</p>}

            {/* Display Error if there's an error */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Display Data if present */}
            {data && (
                <div>
                    <h3>Response Data:</h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default ApiComponent;
