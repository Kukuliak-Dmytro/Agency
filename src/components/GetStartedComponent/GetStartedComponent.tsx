import styles from  './GetStartedComponent.module.css'
import PrimaryBtn from '../button/PrimaryBtn'
const GetStartedComponent =()=>{
    return (
    <div className={styles.componentWrapper}>
        <div>
            <h3>Ready to launch your next project?</h3>
            <span>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            </span>
        </div>
        <div>
            <PrimaryBtn padding={20}>Get started a project</PrimaryBtn>
        </div>
    </div>
    )
}
export default GetStartedComponent