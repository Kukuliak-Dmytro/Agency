// src/components/button/PrimaryBtn.tsx
import React from 'react';
import styles from './button.module.css';

interface PrimaryBtnProps {
    children: string;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ children }) => {
    return (
        <a href="#" className={styles.primaryBtn}>
            {children}
        </a>
    );
};

export default PrimaryBtn;
