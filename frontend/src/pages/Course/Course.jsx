import Navbar from '../../components/Navbar/Navbar'
import './Course.css'
import jarqyn from '../../assets/img/jarqyn.svg'
const Content = () => {
    return (
        <div className='content-course'>
            <div className='heading'>
                <h1>Курс по детской безопасности</h1>
            </div>
            <div className='qorgan'>
                <p> <strong>Qorgan Project</strong> - это проект, посвященный предотвращению сексуализированного насилия над детьми, их курс будет полезен и детям и взрослым. Обязательно посмотрите бесплатные уроки!</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xF8GTviihQ4?si=gM53DZeYkNmKuByr" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='jarqyn'>
                <p> <strong>Jarqyn project</strong> - проект поддержки ментального здоровья среди молодежи методом peer-to-peer support в университетах</p>
                <img src={jarqyn} alt="" />
            </div>
        </div>
    )
}
function Course() {
    return (
        <div>
            <Navbar />
            <Content />
        </div>
    )
}

export default Course;