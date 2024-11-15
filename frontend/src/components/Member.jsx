import PropTypes from 'prop-types';

const Member = ({image, name, role}) => {
    return (
        <div className="member">
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
};

export default Member;