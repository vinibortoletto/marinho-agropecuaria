import React from "react";

// Components
import { Title } from "../../components/Title/styles";
import NavbarTop from "../../components/Navbars/NavbarTop/index";
import NavbarBottom from "../../components/Navbars/NavbarBottom/index";

// Styles
import { Container } from "./styles";

export default function TermsAndConditions() {
  return (
    <>
      <NavbarTop />
      <NavbarBottom />

      <Container>
        <Title>Termos e condições</Title>

        <section className="content">
          <section>
            <p>
              O frete de entrega do pedido é calculado com base no local de
              entrega, peso e dimensões de cada produto adquirido.
            </p>

            <p>
              Para compras cuja modalidade de entrega escolhida seja e-SEDEX, o
              nome do destinatário será prioritariamente o que consta em seu
              cadastro no PagSeguro e deve ser conferido pelo cliente antes da
              finalização do pedido, uma vez que as etiquetas são geradas
              automaticamente pelo PagSeguro.
            </p>

            <p>
              O Frete Grátis pode ser oferecido pela Marinho Agropecuária como
              ação promocional. Nos casos de devolução, a Marinho Agropecuária
              só se responsabiliza pelo frete quando houver divergência de
              produto (tipo, sabor, tamanho, peso) ou estiver fora do prazo da
              validade. Embalamos com segurança nossos produtos para que não
              haja dano no transporte. O prazo de entrega passa a ser
              considerado a partir da aprovação pela instituição financeira e
              pela Marinho Agropecuária. Após a validação dos dados cadastrais e
              o envio se dá em até dois dias úteis (embutidos no cálculo de
              frete e nas informações de prazo) após a aprovação por motivos de
              separação, contagem e embalagem.
            </p>
          </section>

          <section>
            <h2>Tentativas de entrega</h2>

            <p>
              Serão realizadas até 3 (três) tentativas de entrega no local
              informado.
            </p>

            <p>
              É indispensável que, no endereço solicitado, tenha uma pessoa
              autorizada pelo comprador(a), maior de 18 anos, e portando
              documento de identificação para receber a mercadoria e assinar o
              protocolo.
            </p>
          </section>
        </section>
      </Container>
    </>
  );
}
