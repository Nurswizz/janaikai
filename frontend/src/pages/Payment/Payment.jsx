import './Payment.css'; 
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


const Form = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(import.meta.env.VITE_BACKEND_URL, {email});
            setMessage(response.data.message);
            alert('Комикс был отправлен, проверьте свою почту!');
            await navigate('/'); 
        } catch(error) {
            setMessage(error.response?.data?.message);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div className="form">
            <h1>Купить комикс</h1>
            <p>Покупка осуществляется через перевод на карту по данным реквизитам:</p>
            <p>Здесь будут реквизиты</p>
            <p>Как только осуществляется перевод, нажмите на кнопку оплачено написав ваш Email. Сам комикс придет вам на почту в виде PDF файла сразу же после нажатия кнопки</p>
            <p>Стоимость комикса: n тенге</p>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Email' value={email} disabled={loading} onChange={(e) => setEmail(e.target.value)}/>
                {loading && <p>Подождите, идет загрузка</p>}
                {loading && <div className="loader"></div>} 
                <button className='btn-submit' type='submit' disabled={loading}>Оплачено</button>
            </form>
        </div>
    )
}

const Payment = () => { 
    return (
        <div className='support'>
            <Navbar />
            <Form />
        </div>
    )
}

export default Payment;