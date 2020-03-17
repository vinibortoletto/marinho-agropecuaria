import React from "react";

// Components
import { Title } from "../../components/Title/styles";
import { Text } from "../../components/Text/styles";

// Styles
import { Container } from "./styles";

export default function ExchangesAndReturns() {
  return (
    <Container>
      <Title>Trocas e devoluções</Title>

      <Text className="content">
        <section>
          <p>
            A Marinho Agropecuária oferece aos clientes produtos de qualidade e
            nosso objetivo principal é a sua satisfação. Diante disso, aceitamos
            troca ou devolução dos produtos sem uso em até 7 (sete) dias
            corridos, após o recebimento da compra, sem qualquer custo
            adicional. Para pedir a troca ou devolução, o cliente deve entrar em
            contato conosco através da página de contato. Seu pedido só será
            cancelado caso o produto não tenha sido aberto, usado, não tenha
            ocorrido manuseio inadequado, defeito ocasionado pelo mau uso,
            violado, avariado ou faltando partes.
          </p>
          <p>
            Recuse o recebimento, e escreva o motivo na nota fiscal, se
            acontecer da embalagem aberta ou avariada.
          </p>
          <p>
            Todos o(s) produto(s) devolvido(s) passam por análise do Controle de
            Qualidade Marinho Agropecuária, o que pode levar até 5 (cinco) dias
            úteis após o recebimento do(s) mesmo(s). O produto desejado para
            troca ou restituição do valor só é liberado após a aprovação do
            nosso Controle de Qualidade.
          </p>
          <p>
            Caso ocorra qualquer divergência, a Marinho Agropecuária não aceita
            a devolução e devolve o produto ao remetente sem comunicação prévia.
          </p>
        </section>

        <section>
          <h2>Troca por defeito de funcionamento</h2>

          <p>
            Se o produto apresentar defeito no funcionamento após 7 (sete) dias
            (válido apenas para maquinaria e ferramentas), a contar da data da
            entrega, mas dentro do prazo de garantia do fabricante, de posse da
            Nota Fiscal, o cliente deve entrar em contato com a Assistência
            Técnica do fabricante para comunicar a ocorrência.
          </p>
        </section>
      </Text>
    </Container>
  );
}
