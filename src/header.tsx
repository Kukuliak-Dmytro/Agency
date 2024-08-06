// import styles from './components/Header/Header.module.css';
import PrimaryBtn from './components/button/PrimaryBtn'
export function Header(){
    return(
    <div >
        <div >
            <h1>Brainwave.io</h1>
            <ul>
                <a href="#">
                    <li>Demos</li>
                </a>
                <a href="#">
                    <li>Pages</li>
                </a>
                <a href="#">
                    <li>Support</li>
                </a>
                <a href="#">
                    <li>Contact</li>
                </a>
            </ul>
        </div>
        <div>
            <PrimaryBtn>Get Started a project</PrimaryBtn>
        </div>

    </div>
    )
}