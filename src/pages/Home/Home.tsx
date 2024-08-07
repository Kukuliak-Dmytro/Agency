import styles from './Home.module.css'
// importing from the public folder
// import heroBG from '/vite.svg'

// importing from the src folder
 import heroBG from '/src/assets/heroBG.png'
 import heroImg from '/src/assets/heroImg.png'
 import heroImgDots from '/src/assets/heroImgDots.png'
 import heroImgRound from '/src/assets/heroImgRound.png'
 import heroImgWaves from '/src/assets/heroImgWaves.png'

 import servicesGD from '/src/assets/servicesGD.png'
 import servicesWD from '/src/assets/servicesWD.png'
 import servicesCW from '/src/assets/servicesCW.png'

 import testimonialAvatar from '/src/assets/testimonialAvatar.png'
 import testimonialStars from '/src/assets/testimonialStars.png'



 import {Header} from '../../components/headerComponent/headerComponent'
 import PrimaryBtn from '../../components/button/PrimaryBtn'
 import ServiceCard from '../../components/cards/ServiceCard'
export default function Home(){
    return(
        <>  
            <div style={{backgroundImage:`url(${heroBG})`}} className={styles.heroWrapper}>
                <Header></Header>
                <div className={styles.heroBox}>
                    <div className={styles.heroText}>
                        <h6>LET'S SHIFT YOUR BUSINESS</h6>
                        <h1>Shift your business fast with Shade Pro.</h1>
                        <p>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                        <PrimaryBtn padding={20}>Get started a project</PrimaryBtn>
                    </div>
                    <div className={styles.heroImg}>
                        <img src={heroImg} alt="Smiling face"/>
                        <img src={heroImgDots}  alt=""  />
                        <img src={heroImgRound} alt="" />
                        <img src={heroImgWaves} alt=""/>

                    </div>

                </div>
            </div>
            <div className={styles.servicesWrapper}>
                <div className={styles.servicesBox}>
                    <h6>OUR SERVICES</h6>
                    <h3>We provide great services for our <br /> customers based on needs</h3>
                    <div className={styles.cardsBox}>
                        <ServiceCard backgroundColor='#68D585' srcPath={servicesGD}>Graphic Design</ServiceCard>
                        <ServiceCard backgroundColor='#473BF0' srcPath={servicesWD}>Web Development</ServiceCard>
                        <ServiceCard backgroundColor='#FF7171' srcPath={servicesCW}>Content Writing</ServiceCard>
                    </div>
                </div>
            </div>
            <div className={styles.testimonialWrapper}>
                <div className={styles.testimonialBox}>
                    <div className={styles.testimonialImg}>
                        <img src={testimonialAvatar} alt="Frankling Hick`s face"  />
                    </div>
                    <div className={styles.testimonialText}>
                        <img src={testimonialStars} alt="five stars rating" />
                        <h2>“OMG! I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish.”</h2>
                        <div><span>Franklin Hicks</span> <span>Web Developer</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}