import { ReactNode } from 'react';
import { ModalContentsProps, modalStore } from '../stores/modal';

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
    state.pop();
    if (state.length > 0) {
      modal.setModalState(state);
    }
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
    // 1. modalBackdrop
    // 2. modal store의 state를 반복문으로 모달 창 노출
    return <></>;
  };

  return {
    modalPush,
    modalPop,
    modalClear,
    Modal,
  };
};

export default useModal;
