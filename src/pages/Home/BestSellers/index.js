import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../helpers/Context';

// Components
import ProductCard from '../../../components/ProductCard/index';

// Styles
import { Styles as Section } from './styles';
import { Title } from '../../../components/Title/styles';
import { ButtonSquare } from '../../../components/Buttons/styles';

export default function BestSellers() {
  const context = useContext(ProductContext);
  const itemsToShow = [{}, {}, {}, {}, {}, {}, {}, {}];

  function showBackupCards() {
    return itemsToShow.map((item, index) => <ProductCard key={index} />);
  }

  function showProductCards() {
    return context.products.map(
      (product, index) =>
        index <= 7 && (
          <Link
            onClick={() => {
              context.findSelectedProduct(product.sys.id);
            }}
            key={product.sys.id}
            to="/detalhes-do-produto"
          >
            <ProductCard
              loaded
              className="product_card"
              img={product.fields.img.fields.file.url}
              title={product.fields.title}
              price={product.fields.price}
            />
          </Link>
        ),
    );
  }

  return (
    <Section className="section_margin">
      <Title>Os mais vendidos</Title>

      <div className="content">
        <div className="product_list">
          {context.products.length < 1 ? showBackupCards() : showProductCards()}
        </div>

        <div className="btn_container">
          <Link to="/produtos">
            <ButtonSquare mini transparent>
              Ver mais produtos
            </ButtonSquare>
          </Link>
        </div>
      </div>
    </Section>
  );
}
