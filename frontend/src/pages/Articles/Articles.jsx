import Article from '../../components/Article/Article';
import Navbar from '../../components/Navbar/Navbar';

import './Articles.css';

import pencil from '../../assets/icons/Pencil.png';
import book from '../../assets/icons/Reading.svg';

import Article1 from '../../assets/Articles/Article1.webp';
import Article2 from '../../assets/Articles/Article2.webp';
import Article3 from '../../assets/Articles/Article3.webp';
import Article4 from '../../assets/Articles/Article4.webp';
import Article5 from '../../assets/Articles/Article5.webp';

const Articles = () => {
    return (
        <div className='articles'>
            <Article img={Article1} title='Куда обратиться за помощью, когда она тебе нужна' />
            <Article img={Article2} title='Как воспитывать ребенка без насильственных методов'/>
            <Article img={Article3} title='Как бытовое насилие сказывается на детском ментальном здоровье.'/>
            <Article img={Article4} title='Типы насилия в отношении детей'/>
            <Article img={Article5}title='Определение и влияние психологического насилия'/>
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