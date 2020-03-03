import React from "react";

import { Styles as FormStyles } from "./styles";
import { ButtonPill } from "../../../components/Buttons/styles";

export default function Form() {
  return (
    <FormStyles>
      <div>
        <label>Nome:</label>
        <input type="text" placeholder="Seu Nome Completo" />
        <p className="error_msg">&#8203;</p>
      </div>

      <div>
        <label>Email:</label>
        <input type="email" placeholder="seu@email.com" />
        <p className="error_msg">&#8203;</p>
      </div>

      <div>
        <label>Telefone fixo:</label>
        <input type="text" placeholder="(12) 3456-7891" />
        <p className="error_msg">&#8203;</p>
      </div>

      <div>
        <label>Celular:</label>
        <input type="text" placeholder="(12) 3 4567-8910" />
        <p className="error_msg">&#8203;</p>
      </div>

      <div>
        <label>Mensagem:</label>
        <textarea type="text" placeholder="Olá, gostaria de..." />
        <p className="error_msg">&#8203;</p>
      </div>

      <div className="buttons">
        <ButtonPill mini transparent className="margin_right">
          Limpar
        </ButtonPill>
        <ButtonPill mini>Enviar</ButtonPill>
      </div>
    </FormStyles>
  );
}
