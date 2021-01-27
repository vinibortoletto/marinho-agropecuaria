import React, { useEffect, useContext } from 'react';
import { useProduct } from '../../../../contexts/Product';

// Components
import Radio from '../../../../components/Form/Radio';

// Styles
import { Container } from './styles';

export default function DeliveryOptions() {
  const { deliveryOption, setDeliveryOption } = useProduct();

  function handleChange(e) {
    const radioValue = e.target.value;
    setDeliveryOption(radioValue);
  }

  useEffect(() => {
    const cepNumber = document.querySelector('.cepNumber');

    if (deliveryOption === 'storeDelivery') {
      cepNumber.classList.add('mute');
    } else {
      cepNumber.classList.remove('mute');
    }
  }, [deliveryOption]);

  return (
    <Container>
      <Radio
        label="Vou retirar os produtos na loja física"
        name="deliveryOption"
        value="storeDelivery"
        checked={deliveryOption === 'storeDelivery' && true}
        handleChange={handleChange}
      />
      <Radio
        label="Quero receber os produtos em casa"
        name="deliveryOption"
        value="homeDelivery"
        checked={deliveryOption === 'homeDelivery' && true}
        handleChange={handleChange}
      />
    </Container>
  );
}
