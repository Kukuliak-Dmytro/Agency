// src/components/button/PrimaryBtn.tsx
import React from 'react';
import styles from './button.module.css';

interface PrimaryBtnProps {
    children: string,
    padding?: number;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ children, padding=10 }) => {
    return (
        <a href="#" className={styles.primaryBtn} style={{padding:`${padding}px `}}>
            {children}
        </a>
    );
};

export default PrimaryBtn;
