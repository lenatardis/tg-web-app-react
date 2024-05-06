import styles from "./CustomRange.module.scss";
import React, { useRef, useState, useEffect } from "react";

const CustomRange = () => {
    const [value, setValue] = useState(0);
    const rangeRef = useRef(null);
    const activeStripeRef = useRef(null);
    const circleActiveRef = useRef(null);
    const circleRefs = useRef(new Array(5).fill(null).map(() => React.createRef()));

    useEffect(() => {
        // Optionally log positions to ensure they are correct
        circleRefs.current.forEach((ref, index) => {
            console.log(`Circle ${index * 25}% position: `, ref.current?.offsetLeft);
        });
    }, []);

    const getPositionFromEvent = (event) => {
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const rect = rangeRef.current.getBoundingClientRect();
        return clientX - rect.left; // Ensure position is relative to the stripe start
    };

    const updatePosition = (position) => {
        const rangeWidth = rangeRef.current.offsetWidth;
        const normalizedPosition = Math.min(Math.max(0, position), rangeWidth);
        activeStripeRef.current.style.width = `${normalizedPosition}px`;
        circleActiveRef.current.style.left = `${normalizedPosition}px`; // Adjust to center the active circle
        setValue((normalizedPosition / rangeWidth) * 100);
    };

    const handleMove = (event) => {
        event.preventDefault(); // Prevent scrolling on touch devices
        const position = getPositionFromEvent(event);
        updatePosition(position);
    };

    const startInteraction = (event) => {
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('mouseup', endInteraction);
        document.addEventListener('touchend', endInteraction);
        handleMove(event);
    };

    const endInteraction = () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('mouseup', endInteraction);
        document.removeEventListener('touchend', endInteraction);
    };

    const handleClick = (event) => {
        const position = getPositionFromEvent(event);
        updatePosition(position);
    };

    const handleCircleClick = (index, event) => {
        event.stopPropagation(); // Prevent the stripe's handler from firing
        const circleGrey = circleRefs.current[index].current;
        const circleGreyCenter = circleGrey.offsetLeft + circleGrey.offsetWidth / 2;
        const circleActiveWidth = circleActiveRef.current.offsetWidth;
        const position = circleGreyCenter - (circleActiveWidth / 2); // Centering the active circle on the grey circle
        updatePosition(position);
    };

    return (
        <div className={styles.wrap} ref={rangeRef}>
            <div className={`${styles.stripe} ${styles.inactive}`} onClick={handleClick}>
            </div>
            <div className={`${styles.stripe} ${styles.active}`} ref={activeStripeRef}/>
            <div className={styles.circles}>
                {[0, 25, 50, 75, 100].map((perc, index) => (
                    <span key={perc} ref={circleRefs.current[index]} className={styles.circleGrey}
                          onClick={(e) => handleCircleClick(index, e)}/>
                ))}
            </div>
            <span className={styles.valueStart}>0%</span>
            <span className={styles.valueEnd}>100%</span>
            <span className={styles.valueCurrent} style={{left: `${value}%`}}>{value.toFixed(0)}%</span>
            <span className={styles.circleActive} ref={circleActiveRef} onMouseDown={startInteraction}
                  onTouchStart={startInteraction}/>
            <input type="range" value={value} readOnly style={{display: 'none'}}/>
        </div>
    );
};

export default CustomRange;
