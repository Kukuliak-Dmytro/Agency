 import styles from './headerComponent.module.css';
import PrimaryBtn from '../button/PrimaryBtn'
import { useState } from 'react';
export function Header(){
    const [menuCollapsed, setMenu]=useState(true);
    return(
    <div className={`${styles.headerWrapper} ${menuCollapsed ? "" : styles.show}`}>

        <div className={styles.leftPartHeader}>
            <a href="">
                <h1>Brainwave.io</h1>
            </a>
            <ul className={`${menuCollapsed ? "" : styles.show}`} >
                <a href="#">
                    <li >Demos</li>
                </a>
                <a href="#">
                    <li >Pages</li>
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
        <button className={styles.menuBtn} onClick={()=>{setMenu(!menuCollapsed)}}>
        <span className={`${menuCollapsed ? "" : styles.show}`}></span>
        <span className={`${menuCollapsed ? "" : styles.show}`}></span>
        <span className={`${menuCollapsed ? "" : styles.show}`}></span>
        </button>

    </div>
    )
}