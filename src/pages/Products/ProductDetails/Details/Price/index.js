import React, { useState, useEffect } from 'react';

// Styles
import { Container } from './styles';

export default function Price({ price }) {
  const [creditNum, setCreditNum] = useState(0);

  function handleCreditNum() {
    if (price <= 50) {
      setCreditNum(2);
    } else if (price <= 100) {
      setCreditNum(4);
    } else if (price <= 200) {
      setCreditNum(6);
    }
  }

  function showInstallments() {
    const boxElmt = document.getElementById('installments_table');

    boxElmt.classList.contains('show')
      ? boxElmt.classList.remove('show')
      : boxElmt.classList.add('show');
  }

  function createTable() {
    const rows = [];

    for (let i = 0; i < creditNum; i += 1) {
      rows.push(i + 1);
    }

    return (
      <table id="installments_table">
        <tbody>
          <tr className="header">
            <th className="first_label">Prazo</th>
            <th className="second_label">Valor mensal</th>
            <th className="third_label">Total</th>
          </tr>

          {rows.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row}x sem juros</td>
                <td>R${(Math.round((price / row) * 100) / 100).toFixed(2)}</td>
                <td>R${price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  useEffect(() => {
    handleCreditNum();
  }, []);

  return (
    <Container>
      <h3>R$ {price}</h3>
      <p>Em até {creditNum}x sem juros</p>
      <span onClick={showInstallments} onKeyPress={showInstallments} role="button" tabIndex="0">
        Calculadora de parcelas
      </span>

      {createTable()}
    </Container>
  );
}
