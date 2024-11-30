import page_1 from '../assets/img/page1.webp'
import page_2 from '../assets/img/page2.webp'

const Container = () => {
  return (
    <div className='background-container'>
        <ul>
          <li>8 анонимных историй</li>
          <li>Руководство по помощи детям с травмирующим опытом </li>
        </ul>
        <h1>
          JANAIQAI
          <p>скоро выйдут переводы на казахском и английском языках</p>
        </h1>
        <ul>
          <li>Куда обратиться за помощью</li>
          <li>Терминология</li>
          <li>Странички о тревожности</li>
          <li>Стихотворение “Ало, Мам”</li>
        </ul>
    </div>
  )
}

const Images = () => {
  return (
    <div>
      <img className='img1' src={page_1} alt="" loading='lazy'/>
      <img className='img2'src={page_2} alt="" loading='lazy'/>
    </div>
  );
}
const Timeline = () => {
  return (
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
        <span>5-29 ноября</span>
      </div>
      <div className="timeline-item">
        <div className="vertical-line"></div>
        <p>Выпуск</p>
        <span>30 ноября</span>
      </div>
    </div>
  );
}
const Info = () => {
    return (
    <div className='info'>
    <Container />
    <Images />
    <div className="horizontal-line"></div>
    <Timeline />
    </div>
      );
}

export default Info