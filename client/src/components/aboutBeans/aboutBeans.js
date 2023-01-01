import './aboutBeans.module.scss';
import LogoDark from '../logoDark/LogoDark';
import AboutBeansImg from '../../assets/img/about_beans.jpg';


const AboutBeans = () => {
 return (
    <div className="about">
        <div className="container">
            <div className="about__inner">
            <div className="about__image">
                    <img src={AboutBeansImg} alt="" />
            </div>
            <div className="about__info">
                <div className="about__title">About our beans</div>
                <LogoDark/>
                <div className="about__descr-first">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</div>
                <div className="about__descr-second">Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. 
                As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.</div>
            </div>
            </div>
        </div>
    </div>
 )
}
export default AboutBeans;