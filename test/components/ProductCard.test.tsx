import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCar } from '../../src/components/ProductCar';
import { product } from '../data/product';

const { act } = renderer

describe('ProductImage', () => { 

    test('debe de mostrar el componente correctamente ', () => {

        const wrapper = renderer.create(
            <ProductCar product={product} >
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCar>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
        //console.log(wrapper.toJSON() )
     });

     test('debe de mostrar el componente, con la imagen del producto', () => { 
        const wrapper = renderer.create(
            <ProductCar product={product} >
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(1)} ></button>
                        </>
                    )
                }
            </ProductCar>
        );

        let tree = wrapper.toJSON();        
        expect(tree).toMatchSnapshot();

        act(() => { 
            (tree as any).children[2].props.onClick();            
        })


        tree = wrapper.toJSON();

        expect((tree as any).children[1].children[0]).toBe('1');
        //expect(wrapper.toJSON()).toMatchSnapshot();
      });
})