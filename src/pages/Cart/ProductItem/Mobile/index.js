import React, { useContext } from 'react';
import { ProductContext } from '../../../../helpers/Context';

// Components
import DividingLine from '../../../../components/DividingLine';
import Select from '../../../../components/Form/Select';

// Styles
import { Container } from './styles';

export default function Mobile() {
  const context = useContext(ProductContext);
  const { cart } = context;

  function displayCartProducts() {
    return cart.map((product, index) => {
      const { title, price } = product.fields;
      const img = product.fields.img.fields.file.url;

      return (
        <>
          <div key={index} className="product_info">
            <div>
              <img src={img} alt="produto" />
            </div>

            <div className="product_content">
              <h1 className="title">{title}</h1>
              <h2 className="price">Valor unit.: R${price}</h2>

              <button type="button" className="remove_item">
                <i className="fas fa-times" />
                Remover item
              </button>
            </div>

            <Select mini cart options={['1', '2', '3', '4', '5']} />
          </div>

          <DividingLine bgColor="var(--d_gold);" />
        </>
      );
    });
  }

  return (
    <Container>
      {displayCartProducts()}

      <h3 className="subtotal">
        <span>Subtotal:</span> R$50,00
      </h3>
    </Container>
  );
}
