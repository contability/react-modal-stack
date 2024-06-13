import styled from 'styled-components';
import { ReactNode } from 'react';
import Button from '../Button';
import useModal from '../../../hooks/useModal';

const AlertPanelWrapper = styled.div`
  padding: 1.6rem 3.2rem;
  background-color: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  min-width: 45rem;

  h4 {
    color: #000000;
    font-size: 3.2rem;
    font-weight: 500;
    border-bottom: 1px solid gray;
  }

  div.modal-alert__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000000;
  }

  footer {
    align-self: center;
  }
`;

interface AlertPanelProps {
  header?: string;
  contents?: ReactNode;
}

const AlertPanel = ({ header = '', contents = <></> }: AlertPanelProps) => {
  const { modalPop } = useModal();

  return (
    <AlertPanelWrapper>
      <h4>{header}</h4>
      <div className="modal-alert__body">{contents}</div>
      <footer>
        <Button label="Close" onClick={modalPop} />
      </footer>
    </AlertPanelWrapper>
  );
};

export default AlertPanel;
