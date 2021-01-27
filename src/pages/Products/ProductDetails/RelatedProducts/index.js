import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../../components/ProductCard/index';
import { useProduct } from '../../../../contexts/Product';
// Styles
import { Container } from './styles';

export default function RelatedProducts() {
  const { products, selectedProduct, findSelectedProduct } = useProduct();

  function renderRelatedProducts() {
    const selectedProductTags = selectedProduct[0].fields.tags.split(', ')[0];

    const relatedProducts = products.filter((product) =>
      product.fields.tags.includes(selectedProductTags),
    );

    if (relatedProducts.length < 4) {
      let randomProduct = products[Math.floor(Math.random() * products.length)];

      relatedProducts.forEach((product) => {
        while (product.sys.id === randomProduct.sys.id) {
          randomProduct = products[Math.floor(Math.random() * products.length)];
        }
      });

      relatedProducts.push(randomProduct);
    }

    return relatedProducts.map(
      (product, index) =>
        index <= 3 && (
          <Link
            onClick={() => {
              findSelectedProduct(product.sys.id);
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
