import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../../contexts/Product';

// Components
import DividingLine from '../../../components/DividingLine';
import { ButtonBullet } from '../../../components/Buttons/styles';

// Styles
import { Container } from './styles';

export default function OrderSummary() {
  const context = useContext(ProductContext);
  const {
    cart,
    setCart,
    tax,
    setTax,
    subtotal,
    setSubtotal,
    deliveryOption,
  } = context;
  const [totalAmountOfProducts, setTotalAmountOfProducts] = useState(0);
  const [total, setTotal] = useState(0);
  const [numOfInstallments, setNumOfInstallments] = useState(0);
  const [buttonContent, setButtonContent] = useState('Finalizar compra');
  const [errorMsgContent, setErrorMsgContent] = useState('');

  function updateOrderSummary() {
    let newTotalAmountOfProducts = 0;
    let newSubtotal = 0;

    if (cart.length > 0) {
      cart.forEach((product) => {
        const { price, amount } = product.fields;

        // Total amount of products
        newTotalAmountOfProducts += amount;
        setTotalAmountOfProducts(newTotalAmountOfProducts);

        // Subtotal
        newSubtotal += price * amount;
        setSubtotal(newSubtotal.toFixed(2));

        // Total
        const newTotal = newSubtotal + parseFloat(tax);
        setTotal(newTotal);

        // Number of installments
        if (newTotal <= 50) {
          setNumOfInstallments(2);
        } else if (newTotal <= 100) {
          setNumOfInstallments(4);
        } else if (newTotal <= 200) {
          setNumOfInstallments(6);
        } else if (newTotal <= 600) {
          setNumOfInstallments(8);
        } else {
          setNumOfInstallments(12);
        }
      });
    } else {
      setTotalAmountOfProducts(0);
      setSubtotal(0);
      setTax(0);
      setTotal(0);
    }
  }

  function buyProduct() {
    const btn = document.querySelector('.buyProduct_btn');

    btn.setAttribute('disabled', true);
    btn.style.background = '#a9a9a9';

    setButtonContent('Finalizando compra...');
    setTimeout(() => {
      setButtonContent('Compra finalizada!');

      setTimeout(() => {
        // Reset "buyProduct" button
        btn.removeAttribute('disabled');
        btn.style.background = '#00a79d';
        setButtonContent('Finalizar compra');

        // Reset cart
        setTotalAmountOfProducts(0);
        setSubtotal(0);
        setTax(0);
        setTotal(0);

        localStorage.setItem('cart', JSON.stringify([]));
        setCart([]);
      }, 1500);
    }, 1500);
  }

  useEffect(() => {
    const btn = document.querySelector('.buyProduct_btn');
    const errorMsg = document.querySelector('.error_msg');

    // Change error message
    if (cart.length === 0) {
      setErrorMsgContent('Carrinho vazio');
    } else if (deliveryOption === 'homeDelivery') {
      setErrorMsgContent('Digite seu CEP');
    } else {
      setErrorMsgContent('');
    }

    // Disable/enable buyProduct button -- Show/hide error message
    if (deliveryOption === 'homeDelivery' && tax !== 0 && cart.length > 0) {
      btn.removeAttribute('disabled');
      btn.style.background = '#00a79d';
      errorMsg.style.display = 'none';
    } else if (deliveryOption === 'storeDelivery' && cart.length > 0) {
      btn.removeAttribute('disabled');
      btn.style.background = '#00a79d';
      errorMsg.style.display = 'none';
    } else {
      errorMsg.style.display = 'block';
      btn.setAttribute('disabled', true);
      btn.style.background = '#a9a9a9';
    }

    updateOrderSummary();
  }, [cart, tax, deliveryOption]);

  return (
    <Container>
      <div className="order_summary">
        <div className="title">Resumo do pedido</div>

        <div>
          <div className="product_amount">
            <span className="title">{totalAmountOfProducts} produtos</span>
            <span className="price">R${subtotal}</span>
          </div>

          <div className="delivery_tax">
            <span className="title">Frete</span>
            <span className="price">R${tax}</span>
          </div>

          <DividingLine />

          <div className="order_total">
            <div>
              <span className="title">Total:</span>
              <span className="price">R$ {total}</span>
            </div>
            <span className="payment_method">
              em até {numOfInstallments}x sem juros
            </span>
          </div>
        </div>
      </div>

      <div>
        <ButtonBullet className="buyProduct_btn" onClick={buyProduct}>
          {buttonContent}
        </ButtonBullet>

        <p className="error_msg">{errorMsgContent}</p>
      </div>
    </Container>
  );
}
