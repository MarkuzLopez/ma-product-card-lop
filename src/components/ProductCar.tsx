import React, { createContext, ReactElement, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';


export const ProductContext =  createContext({} as  ProductContextProps);

const { Provider } = ProductContext;

export interface Props { 
    product: Product;
    //children?: ReactElement | ReactElement[];
    children: (argument: ProductCardHandlers) => ReactElement;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValue?: InitialValues;
}

export const ProductCar = ({ product, children, className, style, onChange, value, initialValue }: Props) => {

    const { counter, increaseBy, reset, isMaxCountReached  } = useProduct({ onChange, product, value, initialValue })

    const  maxCount = initialValue?.maxCount || 0
    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount    
        }}> 
        <div className={`${styles.productCard} ${className}`} style={style}>
            { children({
                count: counter,
                isMaxCountReached,
                maxCount,
                product,
                increaseBy,
                reset
            }) 
            }
        </div>
        </Provider>
    )
}
