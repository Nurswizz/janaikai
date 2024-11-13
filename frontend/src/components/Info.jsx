import page_1 from '../assets/img/page1.png'
import page_2 from '../assets/img/page2.png'

const Info = () => {
    return (
    <div className='info'>
    <div className='background-container'>
        <ul>
          <li>8 анонимных историй</li>
          <li>Руководство по помощи детям с травмирующим опытом </li>
        </ul>
        <h1>
          JANAIQAI
          <p>Комикс переведен на 3 языка</p>
        </h1>
        <ul>
          <li>Куда обратиться за помощью</li>
          <li>Терминология</li>
          <li>Странички о тревожности</li>
          <li>Стихотворение “Ало, Мам”</li>
        </ul>
    </div>
    <img className='img1' src={page_1} alt="" />
    <img className='img2'src={page_2} alt="" />
    <div className="horizontal-line"></div>
    <div className="timeline">
      <div className="timeline-item">
        <div className="vertical-line"></div>
        <p>Первый созвон</p>
        <span>15 сентября</span>
      </div>
      <div className="timeline-item">
        <div className="vertical-line"></div>
        <p>Рассылка анонимного опросника</p>
        <span>15-30 сентября</span>
      </div>
      <div className="timeline-item">
        <div className="vertical-line"></div>
        <p>Сценарий</p>
        <span>17 сентября</span>
      </div>
      <div className="timeline-item">
        <div className="vertical-line"></div>
        <p>Написание стиха</p>
        <span>до 15 октября</span>
      </div>
      <div className="timeline-item">
        <div className="vertical-line"></div>
        <p>Иллюстрирование</p>
        <span>до 5 ноября</span>
      </div>
      <div className="timeline-item">
        <div className="vertical-line"></div>
        <p>Создание сайта</p>
        <span>5-15 ноября</span>
      </div>
      <div className="timeline-item">
        <div className="vertical-line"></div>
        <p>Выпуск</p>
        <span>16 ноября</span>
      </div>
    </div>
    </div>
      );
}

export default Info