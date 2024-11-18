import Article from './components/Article/Article';
import Navbar from './components/Navbar/Navbar';
import './Articles.css';
import pencil from './assets/icons/Pencil.png';
import book from './assets/icons/Reading.svg';

const Articles = () => {
    return (
        <div className='articles'>
            <Article img='https://via.placeholder.com/175' title='Article 1'/>
            <Article img='https://via.placeholder.com/150' title='Article 2'/>
            <Article img='https://via.placeholder.com/150' title='Article 3'/>
            <Article img='https://via.placeholder.com/150' title='Article 4'/>
            <Article img='https://via.placeholder.com/150' title='Article 5'/>
        </div>
    )
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
    )
}

export default ArticlesPage;