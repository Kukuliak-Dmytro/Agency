import React from 'react';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
    heading: string;
    srcPath:string;
  
}

const FeatureCard: React.FC<FeatureCardProps> = ({ heading, srcPath}) => {
    return (
        <div className={`${styles.cardWrapper} `} >
            <img src={srcPath} alt="Service" />
            <div>
                <h5>{heading}</h5>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            </div>
           

        </div>
    );
};

export default FeatureCard;
