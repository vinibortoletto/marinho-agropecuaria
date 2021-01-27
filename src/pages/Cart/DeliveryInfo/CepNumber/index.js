import React, { useState } from 'react';
import InputMask from 'react-input-mask';
// Components
import { ButtonSquare } from '../../../../components/Buttons/styles';
import { useProduct } from '../../../../contexts/Product';
// Styles
import { Container } from './styles';

export default function CepNumber() {
  const { setTax, subtotal } = useProduct();
  const [cepNumber, setCepNumber] = useState(0);
  const [buttonContent, setButtonContent] = useState('Calcular');

  function calculateTax() {
    const errorMsg = document.querySelector('.cepNumber span');
    const btn = document.querySelector('.cepNumber button');

    if (cepNumber.length > 8) {
      btn.setAttribute('disabled', true);
      btn.style.background = '#a9a9a9';

      setButtonContent('Calculando...');
      setTimeout(() => {
        setButtonContent('Calculado');
        let newTax = 0.05 * subtotal;
        newTax = newTax.toFixed(2);
        setTax(newTax);

        setTimeout(() => {
          btn.removeAttribute('disabled');
          btn.style.background = '#00a79d';
          setButtonContent('Calcular');
        }, 1500);
      }, 1500);

      errorMsg.style.display = 'none';
    } else {
      errorMsg.style.display = 'block';
    }
  }

  return (
    <Container>
      <div className="cepNumber mute">
        <h1>Digite seu CEP para calcular o frete</h1>

        <div className="input_wrapper">
          <InputMask
            name="cepNumber"
            mask="99999-999"
            maskChar=""
            placeholder="12345-678"
            onChange={(e) => {
              setCepNumber(e.target.value);
            }}
          />

          <ButtonSquare mini onClick={calculateTax}>
            {buttonContent}
          </ButtonSquare>
        </div>

        <a href="http://www.buscacep.correios.com.br/sistemas/buscacep/">
          Não sei meu CEP
        </a>
        <span>Digite um CEP válido</span>
      </div>
    </Container>
  );
}
