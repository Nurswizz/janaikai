import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';

const Button = ({route, text, className} ) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(route);
    }

    return (
        <button  className={className} onClick={handleClick}>{text}</button>
    )
}
Button.propTypes = {
    route: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Button;