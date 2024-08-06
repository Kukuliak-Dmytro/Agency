import React from 'react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    backgroundColor: string;
    srcPath: string;
    children: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ backgroundColor, srcPath, children }) => {
    return (
        <div className={styles.cardWrapper} style={{ backgroundColor }}>
            <img src={srcPath} alt="Service" />
            <h4>{children}</h4>
            <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            <h5><a href="">Learn more &#8594;</a></h5>

        </div>
    );
};

export default ServiceCard;
