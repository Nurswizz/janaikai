import PropTypes from 'prop-types';
import erke from '../assets/helpers/Ellipse.png';
import aziza from '../assets/helpers/Ellipse-5.png';
import alisher from '../assets/helpers/Ellipse-1.png';
const HelperLeft = ({ name, role, img }) => {
    return (
        <div className='helper-left'>
            <img src={img} alt="" />
            <div className='helper-text'>
                <p>{name}</p>
                <p>{role}</p>
            </div>
        </div>  
    );
}
HelperLeft.propTypes = {
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
            <div className="help-content-left">
                <HelperLeft name="Азиза Киреева" role="Автор комикса “Клубок”" img={aziza}/>
                <HelperLeft name="Еркежан @art_erke" role="Диджитал иллюстраторка" img={erke}/>
                <HelperLeft name="Алишер @im_alisherlock_art" role="Автор комикса “Барри и Карри”" img={alisher}/>
            </div>
        </div>
    );

}
export default Help;