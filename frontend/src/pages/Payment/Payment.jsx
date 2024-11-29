import './Payment.css'; 
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import { useState } from 'react';
import process from 'process';
import {useNavigate} from 'react-router-dom';


const Form = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(process.env.REACT_APP_SENDING_URL, {email});
            setMessage(response.data.message);
            await navigate('/'); 
            alert('Комикс был отправлен, проверьте свою почту!');
            
        } catch(error) {
            setMessage(error.response.data.message);
            console.log(error);
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
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                {message && <p>{message}</p>}
                <button className='btn-submit' type='submit'>Оплачено</button>
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