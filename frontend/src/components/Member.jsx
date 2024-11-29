import PropTypes from 'prop-types';

const Member = ({image, name, role, className}) => {
    return (
        <div className="member" id={className} >
            <img src={image} alt="img" loading='lazy'/>
            <p>{name}</p>
            <span>{role}</span>
        </div>
    );
}

Member.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Member;