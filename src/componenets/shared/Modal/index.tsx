import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { modalStore } from '../../../stores/modal';
import useModal from '../../../hooks/useModal';

const ModalContainerWrapper = styled.div`
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBackDrop = styled.div<{ $isTransparent: boolean }>`
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  z-index: 98;
  background-color: ${({ $isTransparent }) => ($isTransparent ? 'transparent' : 'gray')};
  opacity: 0.8;
`;

const ModalContents = styled.article`
  z-index: 99;
`;

interface ModalContainerProps {
  /**
   * 배경 클릭시 모달 닫힘 여부
   * - true: 닫힘 기능 없음
   * - false: 닫힘
   */
  isDisalbedBackdropClick?: boolean;
  /**
   * 배경 색상 투명 여부
   * true: 투명
   * false: 불투명
   */
  isBackdropTransparent?: boolean;
  children?: ReactNode;
}

const ModalContainer = ({
  isDisalbedBackdropClick = false,
  isBackdropTransparent = false,
  children = <></>,
}: ModalContainerProps) => {
  const { modalPop } = useModal();
  const handleBackdropClick = () => {
    if (!isDisalbedBackdropClick) modalPop();
  };

  return (
    <ModalContainerWrapper>
      <ModalBackDrop $isTransparent={isBackdropTransparent} onClick={handleBackdropClick} />
      <ModalContents>{children}</ModalContents>
    </ModalContainerWrapper>
  );
};

export default ModalContainer;
