import React from 'react';
import Git from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';


// onclickk
const Footer = () => {
    return (
        <footer className="footer-master">
            <div className="column">
                <h1>Kai Zhu</h1>
                <ul className="footer-lst">
                    <li><a href="https://github.com/kaizhu94"><img src={Git} /></a></li>
                    <li><a href="https://www.linkedin.com/in/kaihua-zhu-177a041b1/"><img src={Linkedin} /></a></li>
                </ul>
            </div>
            <div className="column">
                <h1>Monica Liang</h1>
                <ul className="footer-lst">
                    <li><a href="https://github.com/lmonica97"><img src={Git} /></a></li>
                    <li><a href="https://www.linkedin.com/in/monica-liang-a06510146/"><img src={Linkedin} /></a></li>
                </ul>
            </div>
            <div className="column">
                <h1>Ariel Taylor</h1>
                <ul className="footer-lst">
                    <li><a href="https://github.com/arieltlr"><img src={Git} /></a></li>
                    <li><a href="https://www.linkedin.com/in/taylorariel/"><img src={Linkedin} /></a></li>
                </ul>
            </div>
            <div className="column">
                <h1>Jane Baik</h1>
                <ul className="footer-lst">
                    <li><a href=""><img src={Git} /></a></li>
                    <li><a href=""><img src={Linkedin} /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;