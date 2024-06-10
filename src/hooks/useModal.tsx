import { ReactNode } from 'react';

const useModal = () => {
  /**
   * 1. 모달 스토어 만들고 모달 state import
   * 2. 모달 스토어 내 setModalState import
   */

  /**
   * modal stack에 push
   * @param contents {Array<모달 인터페이스>}
   */
  const modalPush = ({ contents }: any) => {};

  /**
   * modal stack의 마지막 모달을 제거
   */
  const modalPop = () => {};

  /**
   * modal 전체 제거
   */
  const modalClear = () => {};

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
