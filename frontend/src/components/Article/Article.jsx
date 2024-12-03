import './Article.css';
import PropTypes from 'prop-types';

const Article = ({img, title, link}) => {
    return (
        <div className="article">
            <img src={img} alt="article" />
            <p className='title'>{title}</p>
            <a className='link' href={link}>Читать дальше...</a>
        </div>
    )
}

Article.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default Article;