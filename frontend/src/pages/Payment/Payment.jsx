import './Payment.css'; 
import Navbar from '../../components/Navbar/Navbar';
const Form = () => {
    return (
        <div className="form">
            <h1>Купить комикс</h1>
            <p>Покупка осуществляется через перевод на карту по данным реквизитам:</p>
            <p>Здесь будут реквизиты</p>
            <p>Как только осуществляется перевод, нажмите на кнопку оплачено написав ваш Email. Сам комикс придет вам на почту в виде PDF файла сразу же после нажатия кнопки</p>
            <p>Стоимость комикса: n тенге</p>
            <form action="">
                <input type="email" placeholder='Email' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"/>
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