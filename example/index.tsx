import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Hoolis modificacion de version',
}

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        initialValue={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
            <>
              <ProductImage />
              <ProductTitle title={'Café'} />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
