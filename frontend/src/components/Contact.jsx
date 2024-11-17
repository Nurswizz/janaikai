import heart from '../assets/icons/Heart.svg'

const Contact = () => {
    return (
        <div className="contact">

            <header>
                <p>Свяжитесь с нами</p>
                <img src={heart} alt="" />
            </header>

            <div className='content'>
                <div className='left'>
                    <p>Мы приветствуем ваши мысли и истории. Обращайтесь к нам по любым вопросам! 
                    -команда Janaiqai <img src={heart} alt="" /> </p>
                </div>
                <div className='right'>
                    <form action="" method='POST'>
                        <input type="text" name='name' placeholder='Name' />
                        <input type="text" name='surname' placeholder='Surname' />
                        <input type="email" name='email' placeholder='Email' />
                        <textarea name="message" placeholder='Message'></textarea>
                        <button type='submit'>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;