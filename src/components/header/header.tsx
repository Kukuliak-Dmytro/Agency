import styles from './Header.module.css';
import PrimaryBtn from '../button/PrimaryBtn'
export default function Header(){
    return(
    <div className={styles.headerWrapper}>
        <div className={styles.leftPartHeader}>
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
        <div className={styles.rightPartHeader}>
            <PrimaryBtn>Get Started a project</PrimaryBtn>
        </div>

    </div>
    )
}