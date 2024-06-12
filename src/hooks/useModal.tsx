import { ReactNode } from 'react';
import { ModalContentsProps, modalStore } from '../stores/modal';
import { createPortal } from 'react-dom';
import ModalContainer from '../componenets/shared/Modal';

const useModal = () => {
  const modal = modalStore(state => state);

  /**
   * modal stack에 push
   * @param contents {Array<모달 인터페이스>}
   */
  const modalPush = (contents: ModalContentsProps) => {
    modal.setModalState([...modal.modalState, contents]);
  };

  /**
   * modal stack의 마지막 모달을 제거
   */
  const modalPop = () => {
    const state = modal.modalState;
    if (state.length > 0) {
      state.pop();
    }
    modal.setModalState(state);
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
