import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { ButtonBullet, ButtonPill } from '../../../Buttons/styles';

export default function SubmitButton({
  isSubmitting,
  subscribe,
  cep,
  error,
  login,
  signup,
}) {
  const [buttonContent, setButtonContent] = useState('');
  let btnSubmit;

  function handleAnimation() {
    if (btnSubmit.hasAttribute('disabled')) {
      const loadingBg = btnSubmit.firstElementChild;
      setButtonContent('Aguarde um momento...');
      loadingBg.classList.add('loading_animation');

      setTimeout(() => {
        setButtonContent('Enviar');
        cep && setButtonContent('Calcular');
        login && setButtonContent('Entrar');
        signup && setButtonContent('Cadastrar');

        loadingBg.classList.remove('loading_animation');
      }, 2000);
    }
  }

  function handleClick(e) {
    btnSubmit = e.target.parentNode.firstElementChild;
    setTimeout(handleAnimation, 10);
  }

  useEffect(() => {
    setButtonContent('Enviar');
    cep && setButtonContent('Calcular');
    login && setButtonContent('Entrar');
    signup && setButtonContent('Cadastrar');

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
          onClick={handleClick}
        >
          <div className="loading_bg" />
          <p>{buttonContent}</p>
        </ButtonBullet>
      ) : (
        <ButtonPill
          className="submit_btn"
          disabled={isSubmitting}
          mini
          type="submit"
          onClick={handleClick}
        >
          <p>{buttonContent}</p>
          <div className="loading_bg" />
        </ButtonPill>
      )}
    </Container>
  );
}
