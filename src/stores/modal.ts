import { ReactNode } from 'react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IModalStore {
  modalState: Array<ModalContentsProps>;
  setModalState: (modalContents: ModalContentsProps) => void;
  popModalState: () => void;
  resetModalState: () => void;
}

export interface ModalContentsProps {
  key: string;
  component: ReactNode;
}

export const modalStore = create<IModalStore>()(
  devtools(set => ({
    modalState: [],
    setModalState: (modalContents: ModalContentsProps) =>
      set(state => ({
        modalState: [...state.modalState, modalContents],
      })),
    popModalState: () => {
      return set(state => {
        const popState = state.modalState;
        if (popState.length > 0) popState.pop();
        return {
          modalState: [...popState],
        };
      });
    },
    resetModalState: () => set({ modalState: [] }),
  })),
);
