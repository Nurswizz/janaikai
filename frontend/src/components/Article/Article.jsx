import './Article.css';
import PropTypes from 'prop-types';

const Article = ({img, title}) => {
    return (
        <div className="article">
            <img src={img} alt="article" />
            <p>{title}</p>
        </div>
    )
}

Article.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Article;