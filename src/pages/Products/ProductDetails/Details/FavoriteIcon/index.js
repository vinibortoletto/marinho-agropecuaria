import React, { useState, useEffect } from "react";

// Components
import { IconSphere } from "../../../../../components/IconSphere/styles";

// Styles
import { Container } from "./styles";

export default function FavoriteIcon() {
  const [favProduct, setFavProduct] = useState(false);
  const [favIcon, setFavIcon] = useState(null);

  function handleClick() {
    setFavProduct(!favProduct);
  }

  useEffect(() => {
    const emptyHeart = <i className="far fa-heart" />;
    const fullHeart = <i className="fas fa-heart" />;

    !favProduct ? setFavIcon(emptyHeart) : setFavIcon(fullHeart);
  }, [favProduct]);

  return (
    <Container onClick={handleClick}>
      <IconSphere>{favIcon}</IconSphere>
    </Container>
  );
}
