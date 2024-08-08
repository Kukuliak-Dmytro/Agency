import React from 'react';
import styles from './WorkCard.module.css';

interface WorkCard {
    srcPath: string;
    workName: string;
    category: string;
}

const WorkCard: React.FC<WorkCard> = ({ srcPath, workName, category }) => {
    return (
        <div className={styles.cardWrapper}>
            <img src={srcPath} alt={workName} />
            <p>{category}</p>
            <h4>{workName}</h4>
        </div>
    );
};

export default WorkCard;
