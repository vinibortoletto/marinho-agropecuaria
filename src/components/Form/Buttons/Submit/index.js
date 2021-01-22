import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { ButtonBullet, ButtonPill } from '../../../Buttons/styles';

export default function SubmitButton({ isSubmitting, subscribe, error, text }) {
  const [buttonContent, setButtonContent] = useState(text);

  function handleAnimation() {
    const btnSubmit = document.querySelectorAll('.submit_btn');

    btnSubmit.forEach((btn) => {
      if (btn.hasAttribute('disabled')) {
        const loadingBg = btn.firstElementChild;
        setButtonContent('Aguarde...');
        loadingBg.classList.add('loading_animation');

        setTimeout(() => {
          setButtonContent(text);
          loadingBg.classList.remove('loading_animation');
        }, 2000);
      }
    });
  }

  useEffect(() => {
    setButtonContent(text);
    clearTimeout(handleAnimation);
  }, [error]);

  return (
    <Container>
      {subscribe ? (
        <ButtonBullet
          className="submit_btn"
          disabled={isSubmitting}
          mini
          type="submit"
          onClick={() => setTimeout(handleAnimation, 10)}
        >
          <div className="btn_bg" />
          <div className="loading_bg" />
          <p>{buttonContent}</p>
        </ButtonBullet>
      ) : (
        <ButtonPill
          className="submit_btn"
          disabled={isSubmitting}
          mini
          type="submit"
          onClick={() => setTimeout(handleAnimation, 10)}
        >
          <div className="btn_bg" />
          <div className="loading_bg" />
          <p>{buttonContent}</p>
        </ButtonPill>
      )}
    </Container>
  );
}
