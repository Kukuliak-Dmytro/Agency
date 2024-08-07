import React, { useEffect, useRef } from 'react';
import styles from './FadeOnScroll.module.css';

interface FadeOnScrollProps {
    children: React.ReactNode;

}

const FadeOnScroll: React.FC<FadeOnScrollProps> = ({ children}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                element.classList.add(`${styles.show}`);
            } else {
                element.classList.remove(`${styles.show}`);
            }
        });
        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, []);

    return (
        <div ref={ref} className={`${styles.fadeOnScrollWrapper}`}>
            {children}
        </div>
    );
};

export default FadeOnScroll;
