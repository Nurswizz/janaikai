import icon from '../assets/icons/Instagram.png';

const Team = () => {
    return (
        <div className="team">
            <div className="left-side">
                <h1>JANAIQAI TEAM</h1>
                <p>Мы команда школьниц из стран
                Центральной Азии</p>
            </div>
            <div className="right-side">
                <img src={icon} alt="" />
                <a href="https://www.instagram.com/janaiqai.comics/">janaiqai.comics</a>
                <p>В нашей команде 4 департамента:</p>
                <ol>
                    <li>Крийетив райтинг</li>
                    <li>Дизайн и иллюстрация </li>
                    <li>Коммуникации </li>
                    <li>Веб-разработка</li>
                </ol>
            </div>
        </div>
    );
}

export default Team;

// //В нашей команде 4 департамента:
// Крийетив райтинг 
// Дизайн и иллюстрация 
// Коммуникации 
// Веб-разработка