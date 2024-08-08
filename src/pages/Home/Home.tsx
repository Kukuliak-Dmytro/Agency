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

import aboutImg1 from '/src/assets/about1.png'
import aboutImg2 from '/src/assets/about2.png'
import aboutImg3 from '/src/assets/about3.png'
import aboutDecoration from '/src/assets/aboutDecoration.png'

import featuresIcon1 from '/src/assets/featuresIcon1.png'
import featuresIcon2 from '/src/assets/featuresIcon2.png'
import featuresIcon3 from '/src/assets/featuresIcon3.png'
import featuresIcon4 from '/src/assets/featuresIcon4.png'

import workImg1 from '/src/assets/works1.png'
import workImg2 from '/src/assets/works2.png'
import workImg3 from '/src/assets/works3.png'
import workImg4 from '/src/assets/works4.png'

import { Header } from '../../components/headerComponent/headerComponent'
import PrimaryBtn from '../../components/button/PrimaryBtn'
import ServiceCard from '../../components/cards/ServiceCard'
import FadeOnScroll from '../../components/animations/FadeOnScroll'
import FeatureCard from '../../components/cards/FeatureCard'
import GetStartedComponent from '../../components/GetStartedComponent/GetStartedComponent'
import WorkCard from '../../components/cards/WorkCard'
import SlideRightOnScroll from '../../components/animations/SlideRightOnSroll'
export default function Home() {
    return (
        <>
            <div style={{ backgroundImage: `url(${heroBG})` }} className={styles.heroWrapper}>
                <Header></Header>
                <div className={styles.heroBox}>
                    <div className={styles.heroText}>
                        <h6>LET'S SHIFT YOUR BUSINESS</h6>
                        <h1>Shift your business fast with Shade Pro.</h1>
                        <p>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                        <PrimaryBtn padding={20}>Get started a project</PrimaryBtn>
                    </div>
                    <div className={styles.heroImg}>
                        <img src={heroImg} alt="Smiling face" />
                        <img src={heroImgDots} alt="" />
                        <img src={heroImgRound} alt="" />
                        <img src={heroImgWaves} alt="" />

                    </div>

                </div>
            </div>
           
                <div className={styles.servicesWrapper}>
                    <div className={styles.servicesBox}>
                        <h6>OUR SERVICES</h6>
                        <h3>We provide great services for our <br /> customers based on needs</h3>
                        <div className={styles.cardsBox}>
                            <SlideRightOnScroll delay={0.3}>
                                <ServiceCard backgroundColor='#68D585' srcPath={servicesGD}>Graphic Design</ServiceCard>
                            </SlideRightOnScroll>

                            <SlideRightOnScroll delay={0.6}>
                                <ServiceCard backgroundColor='#473BF0' srcPath={servicesWD}>Web Development</ServiceCard>
                            </SlideRightOnScroll>

                            <SlideRightOnScroll delay={0.9}>
                                <ServiceCard backgroundColor='#FF7171' srcPath={servicesCW}>Content Writing</ServiceCard>
                            </SlideRightOnScroll>

                        </div>
                    </div>
                </div>
            
            <FadeOnScroll>
                <div className={styles.testimonialWrapper}>
                    <div className={styles.testimonialBox}>
                        <div className={styles.testimonialImg}>
                            <img src={testimonialAvatar} alt="Frankling Hick`s face" />
                        </div>
                        <div className={styles.testimonialText}>
                            <img src={testimonialStars} alt="five stars rating" />
                            <h2>“OMG! I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish.”</h2>
                            <div><span>Franklin Hicks</span> <span>Web Developer</span></div>
                        </div>
                    </div>
                </div>
            </FadeOnScroll>
            <FadeOnScroll>
                <div className={styles.aboutWrapper}>
                    <div className={styles.aboutBox}>
                        <h6>OUR STORY</h6>
                        <span>
                            <h4>We know how everything works and why your business is failing over and over again.</h4>
                        </span>
                        <span>
                            <p>We share common trends and strategies for improving your rental income and making sure you stay in high demand. With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                        </span>
                        <img src={aboutImg1} alt="" />
                        <img src={aboutImg2} alt="" />
                        <img src={aboutImg3} alt="" />
                        <img src={aboutDecoration} alt="" />

                    </div>

                </div>
            </FadeOnScroll>
            <FadeOnScroll>
                <div className={styles.factsWrapper}>
                    <div className={styles.allFactsBox}>
                        <div className={styles.factBox}>
                            <span><h1>1M+</h1></span>
                            <span><p>Customers visit Omega every month to get their service done.</p></span>
                        </div>
                        <div className={styles.factBox}>
                            <span><h1>92%</h1></span>
                            <span><p>Satisfaction rate comes from our awesome customers.</p></span>
                        </div>
                        <div className={styles.factBox}>
                            <span><h1>4.9/5.0</h1></span>
                            <span><p>Average customer ratings we have got all over internet.</p></span>
                        </div>
                    </div>
                </div>
            </FadeOnScroll>

            <div className={styles.featuresWrapper}>
                <div className={styles.featuresBox}>
                    <FadeOnScroll>
                        <h6>WHY CHOOSE US</h6>
                        <span>
                            <h2>People choose us because we serve the best for everyone</h2>
                        </span>
                    </FadeOnScroll>
                    <FadeOnScroll>
                        <div className={styles.featuresGroup}>
                            <FeatureCard heading='Dedicated project manager' srcPath={featuresIcon1}></FeatureCard>
                            <FeatureCard heading='Organized tasks' srcPath={featuresIcon2}></FeatureCard>
                            <FeatureCard heading='Easy feedback sharing' srcPath={featuresIcon3}></FeatureCard>
                            <FeatureCard heading='Never miss deadline' srcPath={featuresIcon4}></FeatureCard>
                        </div>
                    </FadeOnScroll>
                    <FadeOnScroll><GetStartedComponent /></FadeOnScroll>
                </div>
            </div>
            <div className={styles.worksWrapper}>
                <div className={styles.worksBox}>
                    <FadeOnScroll>
                        <h6>CASE STUDIES</h6>
                    </FadeOnScroll>
                    <FadeOnScroll>
                        <h2>Our works describe why we are the best in the business</h2>
                    </FadeOnScroll>
                    <FadeOnScroll>
                        <div className={styles.worksGroup}>

                            <div>
                                <WorkCard srcPath={workImg1} workName="Aura Branding Design" category="Graphic Design" ></WorkCard>
                                <WorkCard srcPath={workImg3} workName="Gradient Website Development" category="Web Development"></WorkCard>
                            </div>
                            <div>
                                <WorkCard srcPath={workImg2} workName="AB.S Snack Packaging" category="Graphic Design"></WorkCard>
                                <WorkCard srcPath={workImg4} workName="Magazine Content Writing" category="Content Writing"></WorkCard>
                            </div>
                        </div>
                    </FadeOnScroll>
                    <SlideRightOnScroll >
                        <a href="#">
                            <h5>See all works &#8594;</h5>
                        </a>
                    </SlideRightOnScroll>
                </div>
            </div>


        </>
    )
}