import React, { useContext, useEffect, useState } from 'react';

// Components
import Gallery from './Gallery';
import Details from './Details';
import RelatedProducts from './RelatedProducts/index';

// Styles
import { Container } from './styles';
import { ProductContext } from '../../../helpers/Context';

export default function ProductDetails() {
  const context = useContext(ProductContext);
  const { selectedProduct } = context;
  const [tag, setTag] = useState();

  function getTag() {
    let newTag;

    if (selectedProduct.length > 0) {
      newTag = selectedProduct[0].fields.tags.replace(/,/g, ' >');
    }

    setTag(newTag);
  }

  function renderProductDetails() {
    const { title, price, description } = selectedProduct[0].fields;
    const img = selectedProduct[0].fields.img.fields.file.url;

    return (
      <div className="gallery_and_details_wrapper">
        <Gallery img={img} />
        <Details title={title} price={price} description={description} />
      </div>
    );
  }

  useEffect(() => {
    getTag();
  }, [context, selectedProduct]);

  return (
    <Container>
      <p className="breadcrumb">{tag}</p>

      <div className="content">
        {selectedProduct.length > 0 && renderProductDetails()}
        <RelatedProducts />
      </div>
    </Container>
  );
}
