import styled from 'styled-components';
import { ReactNode, memo } from 'react';
import Button from '../Button';
import useModal from '../../../hooks/useModal';

const ConfirmPanelWrapper = styled.div`
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
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

export interface ConfirmPanelProps {
  header?: string;
  contents?: ReactNode;
  onConfirm?: () => void;
}

const ConfirmPanel = ({ header = '', contents = <></>, onConfirm }: ConfirmPanelProps) => {
  const { modalPop } = useModal();

  return (
    <ConfirmPanelWrapper>
      <h4>{header}</h4>
      <div className="modal-alert__body">{contents}</div>
      <footer>
        <Button label="Close" onClick={modalPop} />
        <Button label="Confirm" onClick={onConfirm} />
      </footer>
    </ConfirmPanelWrapper>
  );
};

export default memo(ConfirmPanel);
