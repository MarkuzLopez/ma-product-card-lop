import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCar } from '../../src/components/ProductCar';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product,  } from '../data/product';

describe('ProductTitle', () => { 

    test('ebe de mostrar el componente correctamente con el titulo personalizado', () => {

        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" />
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
        //console.log(wrapper.toJSON() )
     })

     test('debe de mostrar el componente, con el nombre del producto', () => { 
        
        const wrapper = renderer.create(
            <ProductCar product={product} >
                {
                    () => (
                        <ProductTitle title="Custom Product" />
                    )
                }
            </ProductCar>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
      })
})