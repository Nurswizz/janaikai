import heart from '../assets/icons/Heart.svg'

const Contact = () => {
    return (
        <div className="contact">
            <header>
                <p>Свяжитесь с нами</p>
                <img src={heart} alt="" />
            </header>

            <div className='left'>
                <p>Мы приветствуем ваши мысли и истории. Обращайтесь к нам по любым вопросам! 
                -команда Janaiqai <img src={heart} alt="" /> </p>
            </div> 
        </div>
    )
}

export default Contact;