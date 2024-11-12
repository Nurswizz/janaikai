import comics from '../assets/img/comics 1.png';

const Content = () => {
    return (
        <div className='content'>
            <img src={comics} alt="comics" />
            <div className='right-side'>
                <div className='black-container'>
                    <h1>JANAIQAI</h1>
                    <p>Иногда самые громкие крики о помощи остаются неуслышанными</p>
                </div>
                <div className='subheading'>
                    <p>
                    Janaiqai comics - комикс, посвященный одной из острых социальных проблем в Центральной Азии. По статистике каждая 5 женщина и каждый 13 мужчина подвергались насилию в детстве. 
                    </p>
                </div>
                <button>
                    <a href="#">
                        Получить доступ к комиксу
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Content;