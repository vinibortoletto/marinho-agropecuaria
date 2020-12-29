import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../../helpers/Context';

// Components
import DividingLine from '../../../components/DividingLine';
import { ButtonBullet } from '../../../components/Buttons/styles';

// Styles
import { Container } from './styles';

export default function OrderSummary() {
  const context = useContext(ProductContext);
  const { cart } = context;

  const [totalAmount, setTotalAmount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [numOfInstallments, setNumOfInstallments] = useState(0);

  function updateOrderSummary() {
    let newTotalAmount = 0;
    let newSubtotal = 0;
    let newTax = 0;

    if (cart.length > 0) {
      cart.forEach((product) => {
        const { price, amount } = product.fields;

        // Total amount of products
        newTotalAmount += amount;
        setTotalAmount(newTotalAmount);

        // Subtotal
        newSubtotal += price * amount;
        setSubtotal(newSubtotal.toFixed(2));

        // Tax
        newTax = 0.05 * newSubtotal;
        setTax(newTax.toFixed(2));

        // Total
        const newTotal = (newSubtotal + newTax).toFixed(2);
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
      setTotalAmount(0);
      setSubtotal(0);
      setTax(0);
      setTotal(0);
    }
  }

  useEffect(() => {
    updateOrderSummary();
  }, [cart]);

  return (
    <Container>
      <div className="order_summary">
        <div className="title">Resumo do pedido</div>

        <div>
          <div className="product_amount">
            <span className="title">{totalAmount} produtos</span>
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
            <span className="payment_method">em até {numOfInstallments}x sem juros</span>
          </div>
        </div>
      </div>

      <div>
        <ButtonBullet>Finalizar pedido</ButtonBullet>
      </div>
    </Container>
  );
}
