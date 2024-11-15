import logo from '../assets/img/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><button><a href="#">Поддержать проект</a></button></li>
                <li><a href="#">Статьи</a></li>
                <li><a href="#"><img src={logo} alt="logo" loading='lazy'/></a></li>
                <li><a href="#">Курс</a></li>
                <li><a href="#">Связаться с нами</a></li>
            </ul>
        </div>
    )
}

export default Navbar;