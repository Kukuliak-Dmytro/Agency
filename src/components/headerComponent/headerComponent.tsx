 import styles from './headerComponent.module.css';
import PrimaryBtn from '../button/PrimaryBtn'
export function Header(){
    return(
    <div >
        <div  className={styles.headerWrapper}>
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