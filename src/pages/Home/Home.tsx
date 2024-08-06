import styles from './Home.module.css'
// importing from the public folder
// import heroBG from '/vite.svg'

// importing from the src folder
 import heroBG from '/src/assets/heroBG.png'
 import heroImg from '/src/assets/heroImg.png'
 import heroImgDots from '/src/assets/heroImgDots.png'
 import heroImgRound from '/src/assets/heroImgRound.png'
 import heroImgWaves from '/src/assets/heroImgWaves.png'



 import {Header} from '../../components/headerComponent/headerComponent'

export default function Home(){
    return(
        <>  
            <div style={{backgroundImage:`url(${heroBG})`}} className={styles.heroWrapper}>
                <Header></Header>
                <div className={styles.heroBox}>
                    <div className={styles.heroText}></div>
                    <div className={styles.heroImg}>
                        <img src={heroImg} alt="Smiling face"/>
                        <img src={heroImgDots}  alt=""  />
                        <img src={heroImgRound} alt="" />
                        <img src={heroImgWaves} alt=""/>

                        </div>

                </div>
            </div>
        </>
    )
}