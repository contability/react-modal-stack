import { ReactNode } from 'react';
import { ModalContentsProps, modalStore } from '../stores/modal';
import { createPortal } from 'react-dom';

const useModal = () => {
  const modal = modalStore(state => state);

  /**
   * modal stack에 push
   * @param newModalContents {Array<모달 인터페이스>}
   */
  const modalPush = (newModalContents: ModalContentsProps) => {
    modal.setModalState(newModalContents);
  };

  /**
   * modal stack의 마지막 모달을 제거
   */
  const modalPop = () => {
    modal.popModalState();
  };

  /**
   * modal 전체 제거
   */
  const modalClear = () => {
    modal.resetModalState();
  };

  /**
   *
   * @returns 모달 컴포넌트
   */
  const Modal = () => {
    const portalElement = document.querySelector('#modal-portal') as HTMLElement;
    return (
      modal.modalState.length > 0 &&
      createPortal(
        <>
          {modal.modalState.map((modalState, index) => (
            <div key={`modal-${index}`}>{modalState.component}</div>
          ))}
        </>,
        portalElement,
      )
    );
  };

  return {
    modalPush,
    modalPop,
    modalClear,
    Modal,
  };
};

export default useModal;
