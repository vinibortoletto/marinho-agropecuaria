import React from "react";

import { IconSphere } from "../../../components/IconSphere/styles";
import { InfoCard, Container } from "../InfoCards/styles";

export default function InfoCards() {
  return (
    <Container>
      <InfoCard>
        <IconSphere>
          <i className="fas fa-phone" />
        </IconSphere>

        <div>
          <div className="margin_bottom">
            <p>(19) 3403 - 4353</p>
            <p>(19) 3403 - 4354</p>
          </div>

          <div>
            <p className="small_text">WhatsApp:</p>
            <p>(19) 99648 -4706</p>
          </div>
        </div>
      </InfoCard>

      <InfoCard>
        <IconSphere>
          <i className="fas fa-clock" />
        </IconSphere>

        <div>
          <div className="margin_bottom">
            <p>Segunda à sexta: 8:00 - 18:00 </p>
            <p>Sábados: 7:30hrs - 13:00</p>
            <p className="muted">Domindos: fechado</p>
          </div>

          <div>
            <p className="italic small_text">
              Feriados podem alterar os horários de funcionamento
            </p>
          </div>
        </div>
      </InfoCard>

      <InfoCard>
        <IconSphere>
          <i className="fas fa-paw" />
        </IconSphere>

        <div>
          <div className="margin_bottom">
            <p className="smal_text">Dra. Paula Fernandes </p>
            <p>Segunda à Sexta: 8:00 - 12:00</p>
          </div>

          <div>
            <p className="small_text">Dr. Augusto Oliveira</p>
            <p>Segunda à Sexta: 13:00 - 17:00</p>
          </div>
        </div>
      </InfoCard>

      <InfoCard>
        <IconSphere>
          <i className="fas fa-map-marker-alt" />
        </IconSphere>

        <div>
          <div className="margin_bottom">
            <p className="small_text">Loja 1</p>
            <p>Av. Dona Jane Conceição, 1144</p>
            <p className="small_text">Jaraguá | Piracicaba - SP</p>
          </div>

          <div>
            <p className="small_text">Loja 2</p>
            <p>Av. Cristóvão Colombo, 2629</p>
            <p className="small_text">Santa Terezinha | Piracicaba - SP</p>
          </div>
        </div>
      </InfoCard>
    </Container>
  );
}
