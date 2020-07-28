import React, { useContext, useEffect, useState } from "react";

// Components
import { Title } from "../../../components/Title/styles";
import Gallery from "./Gallery";
import Details from "./Details";
import RelatedProducts from "./RelatedProducts/index";

// Styles
import { Container } from "./styles";
import { ProductConsumer, ProductContext } from "../../../Context";

export default function ProductDetails() {
  const context = useContext(ProductContext);
  const [tag, setTag] = useState();

  useEffect(() => {
    getTag();
  }, [context]);

  function getTag() {
    let newTag;

    context.selectedProduct.length > 0 &&
      (newTag = context.selectedProduct[0].fields.tags);

    // if (newTag === "dogs") {
    //   setTag("cães");
    // }

    // console.log(newTag);
  }

  return (
    <Container>
      <Title>
        {tag} {`>`} Rações
      </Title>

      <div className="content">
        <ProductConsumer>
          {(value) => {
            if (value.selectedProduct.length > 0) {
              const {
                title,
                price,
                description,
              } = value.selectedProduct[0].fields;
              const img = value.selectedProduct[0].fields.img.fields.file.url;

              return (
                <div className="gallery_and_details_wrapper">
                  <Gallery img={img} />
                  <Details
                    title={title}
                    price={price}
                    description={description}
                  />
                </div>
              );
            }
          }}
        </ProductConsumer>

        <RelatedProducts />
      </div>
    </Container>
  );
}
