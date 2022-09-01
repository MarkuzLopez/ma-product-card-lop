import { useEffect, useState, useRef } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValue?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValue }: useProductArgs) => {

  
  const [counter, setCounter] = useState<number>(initialValue?.count || value);
  const isMounted = useRef(false);
  
  const increaseBy = (value: number) => {
  
    let newValueCount = Math.max(counter + value, 0);

    if(initialValue?.maxCount){
      newValueCount = Math.min(newValueCount, initialValue.maxCount);
    }
    
    setCounter(newValueCount);
    /**
     * la sintaxis: onChange && onChange();
     * es equivalente a if(onchange) { onchange(); }
     */
    onChange && onChange({
      count: newValueCount,
      product
    });
  }

  const reset = () => { 
    setCounter(initialValue?.count || value)
  }


  useEffect(() => {
    if(!isMounted.current) return;
    setCounter(value);
  }, [value]);

  return {
    counter,
    isMaxCountReached: !!initialValue?.count &&  initialValue.maxCount === counter,
    maxCount: initialValue?.maxCount,
    increaseBy,
    reset,
  }
}
