import React, { useEffect, useState } from 'react';
import { ButtonBullet } from '../../../components/Buttons/styles';
// Components
import DividingLine from '../../../components/DividingLine';
import { useProduct } from '../../../contexts/Product';
// Styles
import { Container } from './styles';

export default function OrderSummary() {
  const {
    cart,
    setCart,
    tax,
    setTax,
    subtotal,
    setSubtotal,
    deliveryOption,
    orders,
    setOrders,
  } = useProduct();
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
        newSubtotal = Number(newSubtotal.toFixed(2));
        setSubtotal(newSubtotal);

        // Total
        const newTotal = newSubtotal + Number(tax);
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

  function saveOrderToLocalStorage() {
    // let orders = JSON.parse(localStorage.getItem('orders'));
    // !orders && (orders = []);

    // Get ID
    const orderId = Math.floor(Math.random() * 10000);

    // Get simple date
    const date = new Date();
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const year = date.getFullYear().toString().substr(2, 2);
    const orderSimpleDate = `${day}/${month}/${year}`;

    // Get full date
    function getFullMonth() {
      let fullMonth;
      month === '01' && (fullMonth = 'janeiro');
      month === '02' && (fullMonth = 'fevereiro');
      month === '03' && (fullMonth = 'março');
      month === '04' && (fullMonth = 'abril');
      month === '05' && (fullMonth = 'maio');
      month === '06' && (fullMonth = 'junho');
      month === '07' && (fullMonth = 'julho');
      month === '08' && (fullMonth = 'agosto');
      month === '09' && (fullMonth = 'setembro');
      month === '10' && (fullMonth = 'outubro');
      month === '11' && (fullMonth = 'novembro');
      month === '12' && (fullMonth = 'dezembro');

      return fullMonth;
    }

    const orderFullDate = `${day} de ${getFullMonth()} de ${date.getFullYear()}`;

    // Get tax
    const orderTax = tax;

    // Get total
    const orderSubtotal = subtotal;
    const orderTotal = total;

    const newOrder = {
      id: orderId,
      simpleDate: orderSimpleDate,
      fullDate: orderFullDate,
      products: [...cart],
      tax: orderTax,
      subtotal: orderSubtotal,
      total: orderTotal,
    };

    const newOrders = [...orders, newOrder];
    setOrders(newOrders);
    localStorage.setItem('orders', JSON.stringify(newOrders));
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

    saveOrderToLocalStorage();
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
