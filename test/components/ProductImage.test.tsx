import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCar } from '../../src/components/ProductCar';
import { product2 } from '../data/product';
import { ProductImage } from '../../src/components/ProductImage';

describe('ProductImage', () => { 

    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {

        const wrapper = renderer.create(
            <ProductImage img="hhtps://hola.jpg" />
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
        //console.log(wrapper.toJSON() )
     });

     test('debe de mostrar el componente, con la imagen del producto', () => { 
        
        const wrapper = renderer.create(
            <ProductCar product={product2} >
                {
                    () => (
                        <ProductImage  />
                    )
                }
            </ProductCar>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
      });
})