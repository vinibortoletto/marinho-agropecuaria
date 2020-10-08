import React from 'react';

import { IconSphere } from '../../../../components/IconSphere/styles';

import { Container } from './styles';

function CloseSideBarBtn({ handleCloseSidebar }) {
  return (
    <Container>
      <button id="close_btn" type="button" onClick={handleCloseSidebar}>
        <i className="fas fa-times" />
      </button>
    </Container>
  );
}

export default CloseSideBarBtn;
