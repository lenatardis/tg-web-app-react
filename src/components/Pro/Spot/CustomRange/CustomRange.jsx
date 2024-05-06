import styles from "./CustomRange.module.scss";
import React, { useRef, useState, useEffect } from "react";

const CustomRange = () => {
    const [value, setValue] = useState(0);
    const rangeRef = useRef(null);
    const activeStripeRef = useRef(null);
    const circleActiveRef = useRef(null);
    const circleRefs = useRef(new Array(5).fill(null).map(() => React.createRef())); // Array of refs for each circleGrey

    useEffect(() => {
        // This is just to log positions and see if they are correct
        circleRefs.current.forEach((ref, index) => {
            console.log(`Circle ${index * 25}% position: `, ref.current?.offsetLeft);
        });
    }, []);

    const getPositionFromEvent = (event) => {
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        return clientX - rangeRef.current.getBoundingClientRect().left;
    };

    const updatePosition = (position) => {
        const rangeWidth = rangeRef.current.offsetWidth;
        const normalizedPosition = Math.min(Math.max(0, position), rangeWidth);
        activeStripeRef.current.style.width = `${normalizedPosition}px`;
        circleActiveRef.current.style.left = `${normalizedPosition - 2}px`;  // Adjust for circleActive centering
        setValue((normalizedPosition / rangeWidth) * 100);
    };

    const handleMove = (event) => {
        event.preventDefault();  // Prevent scrolling on touch devices
        const position = getPositionFromEvent(event);
        updatePosition(position);
    };

    const startInteraction = (event) => {
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', endInteraction);
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('touchend', endInteraction);
        handleMove(event);
    };

    const endInteraction = () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', endInteraction);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', endInteraction);
    };

    const handleClick = (index) => {
        const circlePosition = circleRefs.current[index].current.offsetLeft;
        updatePosition(circlePosition + 6); // Adjust to center since offsetLeft gives the start of the element
    };

    return (
        <div className={styles.wrap} ref={rangeRef}>
            <div className={`${styles.stripe} ${styles.inactive}`} onClick={handleClick}/>
            <div className={`${styles.stripe} ${styles.active}`} ref={activeStripeRef}/>
            <div className={styles.circles}>
                {[0, 25, 50, 75, 100].map((perc, index) => (
                    <span key={perc} ref={circleRefs.current[index]} className={styles.circleGrey} onClick={() => handleClick(index)}/>
                ))}
            </div>
            <span className={styles.valueStart}>0%</span>
            <span className={styles.valueEnd}>100%</span>
            <span className={styles.valueCurrent} style={{left: `${value}%`}}>{value.toFixed(0)}%</span>
            <span className={styles.circleActive} ref={circleActiveRef} onMouseDown={startInteraction} onTouchStart={startInteraction}/>
            <input type="range" value={value} readOnly style={{display: 'none'}}/>
        </div>
    );
};

export default CustomRange;
