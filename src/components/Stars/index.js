import React from 'react';

import { Container } from './styles';

export default function Stars({ stars }) {
  function printStars() {
    let starsElmt;

    if (stars === 1) {
      starsElmt = (
        <>
          <i className="fas fa-star active" />
          <i className="fas fa-star mute" />
          <i className="fas fa-star mute" />
          <i className="fas fa-star mute" />
          <i className="fas fa-star mute" />
        </>
      );
    }
    if (stars === 2) {
      starsElmt = (
        <>
          <i className="fas fa-star active" />
          <i className="fas fa-star active" />
          <i className="fas fa-star mute" />
          <i className="fas fa-star mute" />
          <i className="fas fa-star mute" />
        </>
      );
    }
    if (stars === 3) {
      starsElmt = (
        <>
          <i className="fas fa-star active" />
          <i className="fas fa-star active" />
          <i className="fas fa-star active" />
          <i className="fas fa-star mute" />
          <i className="fas fa-star mute" />
        </>
      );
    }
    if (stars === 4) {
      starsElmt = (
        <>
          <i className="fas fa-star active" />
          <i className="fas fa-star active" />
          <i className="fas fa-star active" />
          <i className="fas fa-star active" />
          <i className="fas fa-star mute" />
        </>
      );
    }
    if (stars === 5) {
      starsElmt = (
        <>
          <i className="fas fa-star active" />
          <i className="fas fa-star active" />
          <i className="fas fa-star active" />
          <i className="fas fa-star active" />
          <i className="fas fa-star active" />
        </>
      );
    }

    return starsElmt;
  }

  return <Container>{printStars()}</Container>;
}
