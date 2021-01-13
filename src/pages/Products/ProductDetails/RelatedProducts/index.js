import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  ProductConsumer,
  ProductContext,
} from '../../../../helpers/Context/Product';

// Components
import { Title } from '../../../../components/Title/styles';
import ProductCard from '../../../../components/ProductCard/index';

// Styles
import { Container } from './styles';

export default function RelatedProducts() {
  const context = useContext(ProductContext);
  const selectedProduct = context.selectedProduct;
  const products = context.products;

  function renderRelatedProducts() {
    let selectedProductTags = selectedProduct[0].fields.tags.split(', ')[0];

    let relatedProducts = products.filter((product) =>
      product.fields.tags.includes(selectedProductTags),
    );

    if (relatedProducts.length < 4) {
      let randomProduct;

      function findRandomProduct() {
        randomProduct = products[Math.floor(Math.random() * products.length)];
      }

      findRandomProduct();

      relatedProducts.map((product) => {
        while (product.sys.id === randomProduct.sys.id) {
          findRandomProduct();
        }
      });

      relatedProducts.push(randomProduct);
    }

    return relatedProducts.map(
      (product, index) =>
        index <= 3 && (
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
    <Container>
      <h2 className="title">Produtos relacionados</h2>

      <div className="content">
        <div className="products_list">
          {selectedProduct.length > 0 && renderRelatedProducts()}
        </div>
      </div>
    </Container>
  );
}
