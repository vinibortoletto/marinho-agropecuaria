import React from "react";

// Components
import { Title } from "../../components/Title/styles";
import { Text } from "../../components/Text/styles";

// Styles
import { Container } from "./styles";

export default function PurchaseTerms() {
  return (
    <Container>
      <Title>Termos de compra</Title>

      <Text className="content">
        <section>
          <h2>Aparência dos produtos</h2>

          <p>
            A Marinho Agropecuária apresenta imagens muito fiéis ao produto
            original, mas as cores podem variar conforme seu monitor, iluminação
            do ambiente onde você está e sua percepção visual. Alguns produtos
            tiveram suas embalagens modificadas pelos fabricantes, então pode
            ocorrer uma diferença entre a embalagem do produto comprado e do
            produto recebido. Por isso, as imagens são meramente ilustrativas e
            o que prevalece é o nome do produto tal como sua descrição.
          </p>
        </section>

        <section>
          <h2>Acompanhamento de pedido</h2>

          <p>
            A Marinho Agropecuária possui uma ferramenta que permite ao cliente
            acompanhar todo o processamento do pedido, desde a aprovação do
            pagamento até a entrega. Você encontra essa ferramenta no topo da
            página, com o título "Login" ou Área do Cliente, onde também é
            possível visualizar todos os pedidos feitos em sua conta. As
            informações de rastreamento serão inseridas no site em até 2 dias
            úteis, dependendo do fornecimento das mesmas pelos Correios. Caso
            ocorra qualquer alteração no processamento do seu pedido, você
            receberá uma notificação via e-mail. Por isso, no momento de fazer o
            cadastro, é importante informar um e-mail para receber esses avisos.
          </p>
        </section>

        <section>
          <h2>Alteração de pedido</h2>

          <p>
            Quando o pedido é concluído, não é possível fazer nenhuma alteração
            no mesmo. Caso você queira desistir da compra ou mudar a forma de
            pagamento, deverá começar todo o processo novamente. Se você quiser
            incluir um produto no seu pedido em uma compra já feita na Marinho
            Agropecuária, você precisará fazer um novo pedido para esse produto.
          </p>
        </section>

        <section>
          <h2>Garantia</h2>

          <p>
            A Marinho Agropecuária trabalha em parceria com grandes marcas para
            que os produtos tenham o máximo de garantia para os clientes. Para
            saber detalhes da garantia do produto que você escolheu, acesse o
            site do fabricante para conhecer o respectivo termo de garantia.
            Entraremos em contato caso os produtos que tenhamos no estoque não
            estejam íntegros e negociaremos a troca de produtos ou devolução de
            valor.
          </p>
        </section>

        <section>
          <h2>Mal uso do produto</h2>

          <p>
            Caso seja constatado defeito por mal uso do produto, a devolução
            será recusada pela Marinho Agropecuária, com o reenvio do produto ao
            consumidor, independente de consulta prévia, e a restituição do
            valor pago pelo cliente não será feita.
          </p>
        </section>
      </Text>
    </Container>
  );
}
