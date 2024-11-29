import ig from '../assets/icons/Instagram.png'
import call from '../assets/icons/Call.png'
import mail from '../assets/icons/Mail.png'

const Bottom = () => {
    return (
        <div className="bottom">
            <div className='info-heading'>
                <h1>Наши контакты</h1>
            </div>
            <div className="bottom-content">
                    <div className='contact-item'>
                        <img src={ig} alt="insta" />
                        <p><a href="https://www.instagram.com/janaiqai.comics/">janaiqai.comics</a></p>
                    </div>
                    <div className='contact-item'>
                        <img src={call} alt="number" />
                        <p>+77770180791</p>
                    </div>
                    <div className='contact-item'>
                        <img src={mail} alt="mail" />
                        <p>comics@janaiqai.kz</p>
                    </div>
            </div>
        </div>
    );
}

export default Bottom;