import styles from "./CustomRange.module.scss";
import React, {useRef, useState, useEffect} from "react";

const CustomRange = () => {
    const [value, setValue] = useState(0);
    const rangeRef = useRef(null);
    const activeStripeRef = useRef(null);
    const circleActiveRef = useRef(null);
    const circleRefs = useRef(new Array(5).fill(null).map(() => React.createRef()));
    const currentValueRef = useRef(null);
    let points = [0, 25, 50, 75, 100];
    let circleWidth = 12;


    const getPositionFromEvent = (event) => {
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const rect = rangeRef.current.getBoundingClientRect();
        return clientX - rect.left;
    };

    const updatePosition = (position) => {
        const rangeWidth = rangeRef.current.offsetWidth - circleWidth;
        const normalizedPosition = Math.min(Math.max(0, position), rangeWidth);
        activeStripeRef.current.style.width = `${normalizedPosition}px`;
        circleActiveRef.current.style.left = `${normalizedPosition}px`;
        setValue((normalizedPosition / rangeWidth) * 100);
    };

    const handleMove = (event) => {
        const position = getPositionFromEvent(event) - (circleWidth / 2);
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
        const position = getPositionFromEvent(event) - (circleWidth / 2);
        updatePosition(position);
    };

    const handleCircleClick = (index, event) => {
        event.stopPropagation();
        const circleGrey = circleRefs.current[index].current;
        const circleGreyCenter = circleGrey.offsetLeft + circleGrey.offsetWidth / 2;
        const circleActiveWidth = circleActiveRef.current.offsetWidth;
        const position = circleGreyCenter - (circleActiveWidth / 2);
        updatePosition(position);
        setValue(points[index]);
    };

    useEffect(() => {
        if (currentValueRef.current && rangeRef.current) {
            const sliderWidth = rangeRef.current.clientWidth - circleWidth;
            const labelWidth = currentValueRef.current.offsetWidth;
            const leftPosition = sliderWidth * (value / 100);
            const adjustedLeft = Math.min(sliderWidth - labelWidth + circleWidth, leftPosition);
            currentValueRef.current.style.left = `${adjustedLeft}px`;
        }
    }, [value]);

    return (
        <div className={styles.wrap} ref={rangeRef}>
            <div className={`${styles.stripe} ${styles.inactive}`} onClick={handleClick}>
            </div>
            <div className={`${styles.stripe} ${styles.active}`} ref={activeStripeRef} onClick={handleClick}/>
            <div className={styles.circles}>
                {points.map((perc, index) => (
                    <span key={perc} ref={circleRefs.current[index]} className={styles.circleGrey}
                          onClick={(e) => handleCircleClick(index, e)}/>
                ))}
            </div>
            <span className={`${styles.valueStart} ${value < 10 ? styles.hiddenBlock : ''}`}>0%</span>
            <span className={`${styles.valueEnd} ${value > 80 ? styles.hiddenBlock : ''}`}>100%</span>
            <span className={styles.valueCurrent} ref={currentValueRef}>{value.toFixed(0)}%</span>
            <span className={styles.circleActive} ref={circleActiveRef} onMouseDown={startInteraction}
                  onTouchStart={startInteraction}/>
            <input type="range" value={value} readOnly style={{display: 'none'}}/>
        </div>
    );
};

export default CustomRange;
