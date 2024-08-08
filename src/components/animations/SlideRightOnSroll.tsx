import React, { useEffect, useRef } from 'react';
import styles from './SlideRightOnScroll.module.css';

interface SlideRightOnScrollProps {
    children: React.ReactNode;
    delay?:number;

}

const SlideRightOnScroll: React.FC<SlideRightOnScrollProps> = ({ children,delay=0.6}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                element.classList.add(`${styles.show}`);
            } 
        });
        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, []);

    return (
        <div ref={ref} className={`${styles.fadeOnScrollWrapper}`} style={ {transitionDelay:`${delay}s`} }>
            {children}
        </div>
    );
};

export default SlideRightOnScroll;
