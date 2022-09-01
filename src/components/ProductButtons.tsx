import React, { useContext } from "react";
import { ProductContext } from "./ProductCar";
import styles from '../styles/styles.module.css';
import { useCallback } from "react";

export interface Props {
    className?: string;
}

export const ProductButtons = ({className }: Props) => {
    // TODO maxCount
    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(
      // si no existe maxCount siempre va a regresar un booleano
      () => !!maxCount && counter === maxCount,
      [counter, maxCount]
    )

    // TODO:  isMaxReached callback 
    return (
        <div className={`${styles.buttonsContainer} ${className}`}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)} > - </button>
            <button className={styles.countLabel}>{counter} </button>
            <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} disabled={isMaxReached()} onClick={() => increaseBy(+1)}> + </button>
        </div>
    )
}