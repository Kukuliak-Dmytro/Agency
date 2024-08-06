import styles from './Home.module.css'
// importing from the public folder
// import heroBG from '/vite.svg'

// importing from the src folder
 import heroBG from '/src/assets/heroBG.png'

 import {Header} from '../../components/Header/header'

export default function Home(){
    return(
        <>  
            <div style={{backgroundImage:`url(${heroBG})`}} className={styles.heroWrapper}>
                <Header></Header>
            </div>
        </>
    )
}