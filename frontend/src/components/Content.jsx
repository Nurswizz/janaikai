import comics from '../assets/img/comics 1.webp';

const Content = () => {
    return (
        <div className='content'>
            <div className='right-side'>
                <div className='black-container'>
                    <h1>JANAIQAI</h1>
                    <p>Иногда самые громкие крики о помощи остаются неуслышанными</p>
                </div>
                <img src={comics} alt="comics" width={767} height={678}/>
                <div className='subheading'>
                        <p>
                        Janaiqai comics - комикс, посвященный одной из острых социальных проблем в Центральной Азии. По статистике каждая 5 женщина и каждый 7 мужчина подвергались насилию в детстве. 
                        </p>
                </div>
            </div>
            <button className='main-btn'>
                    <a href="/support">
                        Получить доступ к комиксу
                    </a>
            </button>
            {/* <div className='counter'>
                <p> {money + 14545} тенге пожертвованно в фонд SVET благодаря вашей покупке комикса</p>
            </div> */}
        </div>
    );
}

export default Content;