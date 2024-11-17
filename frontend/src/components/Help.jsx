import PropTypes from 'prop-types';
import erke from '../assets/helpers/Ellipse.png';
import aziza from '../assets/helpers/Ellipse-5.png';
import alisher from '../assets/helpers/Ellipse-1.png';
import jarqyn from '../assets/helpers/Ellipse-2.png';
import svet from '../assets/helpers/Ellipse-3.png';
import tellme from '../assets/helpers/Ellipse-4.png';

const Helper = ({ name, role, img }) => {
    return (
        <div className='helper'>
            <img src={img} alt="" />
            <div className='helper-text'>
                <p>{name}</p>
                <p>{role}</p>
            </div>
        </div>  
    );
}
Helper.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

const Help = () => {
    return (
        <div className="help">
            <div className="help-header">
                <h1>Благодарим за помощь!</h1>
            </div>
            <div className='help-content'>
                <div className="help-content-left">
                    <Helper name="Азиза Киреева" role="Автор комикса “Клубок”" img={aziza}/>
                    <Helper name="Еркежан @art_erke" role="Диджитал иллюстраторка" img={erke} />
                    <Helper name="Алишер @im_alisherlock_art" role="Автор комикса “Барри и Карри”" img={alisher}/>
                </div>
                <div className="help-content-right">
                    <Helper name="@Jarqyn.project" role="Проект по ментальному здоровью среди молодежи" img={jarqyn}/>
                    <Helper name="Общественный фонд SVET " role="Фонд, который существует уже 6 лет и помогает жертвам насилия" img={svet}/>
                    <Helper name="@tellme_sister" role="СМИ о женщинах в Таджикистане" img={tellme}/>
                </div>
            </div>
        </div>
    );  

}
export default Help;