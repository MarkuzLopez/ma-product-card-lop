# Ma-Product-Card-Lo

Este es un ejemplo de despliegue de NPM.

# Markuz Lopez

#Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card';
```

```
 <ProductCard
    product={product[0]}                
    initialValue={{
            count: 4,
            maxCount: 10
    }}
    >
    {
        ({reset, increaseBy, count, isMaxCountReached, maxCount}) => (
            <>
                <ProductImage  />
                <ProductTitle title={'Café'}  />
                <ProductButtons  />                                                
            </>
            )
    }            
</ProductCard>

```