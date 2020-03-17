import React from "react";

// Components
import { Title } from "../../components/Title/styles";
import { Text } from "../../components/Text/styles";

// Styles
import { Container } from "./styles";

export default function PaymentMethods() {
  return (
    <Container>
      <Title>Formas de Pagamento</Title>

      <Text className="content">
        <section>
          <p>
            A Marinho Agropecuária garante a segurança de quem compra conosco. O
            pagamento é realizado por meio do PagSeguro.
          </p>

          <p className="underline">
            O PagSeguro aceita os seguintes meios de pagamento:
          </p>
          <ul>
            <li>1. Cartões de crédito;</li>
            <li>2. Débito bancário;</li>
            <li>3. Depósito em conta.</li>
          </ul>
        </section>

        <section>
          <h2>Pagamento por depósito em conta</h2>

          <p>
            Só prosseguiremos com a venda aprovada caso o titular de nossa conta
            comercial confirme que o valor consta em sua conta, processo que
            poderá demorar até 5 dias úteis dependendo da disponibilidade do
            responsável.
          </p>
        </section>

        <section>
          <h2>Alteração da forma de pagamento</h2>

          <p>
            Para a segurança do cliente, após o fechamento do pedido não é mais
            possível alterar a forma de pagamento. Caso queira mudar a forma de
            pagamento, deverá começar todo o processo de compra novamente.
          </p>
        </section>

        <section>
          <h2>Prazo de entrega</h2>

          <p>
            O prazo de entrega é contado a partir da confirmação de pagamento em
            dias úteis, ou seja, não inclui sábados, domingos e feriados. Está
            embutido no prazo que aparece para o cliente um dia útil, referente
            a separação, contagem e embalagem dos produtos.
          </p>

          <p>
            Caso a compra se dê em Piracicaba, o frete é grátis, tendo um prazo
            de dois dias úteis, dependendo exclusivamente da disponibilidade do
            motorista entregador da loja física. A entrega pode ser feita de
            segunda a sexta das 9h00 às 17h30 e aos sábados no período da manhã,
            não sendo possível a escolha de horários, uma vez que o motorista
            entregador segue o itinerário feito pelo mesmo para suprir as
            entregas do dia.
          </p>
        </section>

        <section>
          <h2>Informações cadastrais incorretas</h2>

          <p>
            O cliente se responsabiliza integralmente por problemas na entrega
            ocorridos quando as informações cadastrais não estão corretas, como
            por exemplo: CEP errado, número do imóvel errado etc. Nesse caso, o
            custo de reenvio é por conta do cliente.
          </p>

          <p>
            Ao comprar na Marinho Agropecuária, o cliente afirma a idoneidade
            entre a relação do endereço de entrega e os dados de pagamento
            informados na compra. Se for confirmada fraude, a Marinho
            Agropecuária se reserva o direito de utilizar os dados de entrega
            para comunicar os órgãos oficiais e os serviços de cadastro
            antifraude.
          </p>
        </section>
      </Text>
    </Container>
  );
}
