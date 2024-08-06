 import styles from './headerComponent.module.css';
import PrimaryBtn from '../button/PrimaryBtn'
export function Header(){
    return(
    <div className={styles.headerWrapper}>
        <div className={styles.leftPartHeader}>
            <a href="">
                <h1>Brainwave.io</h1>
            </a>
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
        <div className={styles.rightPartHeader}>
            <PrimaryBtn>Get Started a project</PrimaryBtn>
        </div>

    </div>
    )
}