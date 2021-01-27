import React, { useEffect, useState } from 'react';
import { useProduct } from '../../../contexts/Product';
import Details from './Details';
// Components
import Gallery from './Gallery';
import RelatedProducts from './RelatedProducts/index';
// Styles
import { Container } from './styles';

export default function ProductDetails() {
  const { selectedProduct } = useProduct();
  const [tag, setTag] = useState();

  function getTag() {
    let newTag;

    if (selectedProduct.length > 0) {
      newTag = selectedProduct[0].fields.tags.replace(/,/g, ' >');
    }

    setTag(newTag);
  }

  function renderProductDetails() {
    return selectedProduct.map((product, index) => {
      const { title, price, description } = product.fields;
      const img = product.fields.img.fields.file.url;
      const { id } = product.sys;

      return (
        <div key={index} className="gallery_and_details_wrapper">
          <Gallery img={img} />
          <Details
            title={title}
            price={price}
            description={description}
            id={id}
          />
        </div>
      );
    });
  }

  useEffect(() => {
    getTag();
  }, [selectedProduct]);

  return (
    <Container>
      <p className="breadcrumb">{tag}</p>

      <div className="content">
        {renderProductDetails()}
        <RelatedProducts />
      </div>
    </Container>
  );
}
