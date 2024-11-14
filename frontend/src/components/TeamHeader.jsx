import Member from './Member';
import Nurgul from '../assets/img/members/Nurgul.png';
import Aruzhan from '../assets/img/members/Aruzhan.png';
import Aru from '../assets/img/members/Aru.png';
import Dilara from '../assets/img/members/Dilara.png';
import Jasmin from '../assets/img/members/Jasmin.png';
import Nursultan from '../assets/img/members/Nursultan.png';
import Asem from '../assets/img/members/Asem.png';
import Sofiya from '../assets/img/members/Sofiya.png';
import Ekaterina from '../assets/img/members/Ekaterina.png';


const TeamHeader = () => {
    return (
        <div className="team-container">
            <div className='team-header'>
                    <h1>JANAIQAI TEAM</h1>
                    <p>Мы команда школьниц из стран
                    Центральной Азии</p>
            </div>
            <div className='members'>
                <Member image={Nurgul} name='Nurgul' role='Script Writer' />
                <Member image={Aruzhan} name='Aruzhan' role='Manager, Scriptwriter' />
                <Member image={Aru} name='Aru' role='Founder' />
                <Member image={Dilara} name='Dilara' role='UX/UI Designer' />
                <Member image={Jasmin} name='Jasmine' role='Illustrator, Designer' />
                <Member image={Nursultan} name='Nursultan' role='Web Developer' />
                <Member image={Asem} name='Asem' role='Script Writer' />
                <Member image={Sofiya} name='Sofya' role='Illustrator' />
                <Member image={Ekaterina} name='Ekaterina' role='Illustrator' />
            </div>
        </div>
    );
}

export default TeamHeader;
