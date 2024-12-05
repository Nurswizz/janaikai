import Article from '../../components/Article/Article';
import Navbar from '../../components/Navbar/Navbar';

import './Articles.css';

import pencil from '../../assets/icons/Pencil.png';
import book from '../../assets/icons/Reading.svg';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { errorMessages } from '../../utils/messages';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [responseMessage, setResponseMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getArticles = async () => {
            try {
            const res = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/admin/admin-panel/articles`
            );
            setArticles(res.data);
            } catch (error) {
            errorMessages(error, setResponseMessage);
            } finally {
            setLoading(false);
            }
        };
        getArticles();
    }, []);

    return (
        <div className='articles'>
            {loading ? (
                <h1 className='load-text' style={{color: "black"}}>Loading...</h1>
            ) : (
                articles.map((article) => (
                    <Article 
                        key={article._id}
                        title={article.title}
                        img={article.imageUrl}
                        link={article.link} 
                    />
                ))
            )}
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
}

const Container = () => {
    return (
        <div className='header'>
            <div className='container'>  
                <img src={pencil} alt="pencil" />
                <h1>Статьи</h1>
            </div>
            <div className='icon'>
                <img src={book} alt="" />
            </div>
        </div>
    );
}

const ArticlesPage = () => {
    return (
        <>
            <Navbar />
            <Container />
            <Articles />
        </>
    );
}

export default ArticlesPage;