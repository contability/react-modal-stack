/**
 * 1. modalState: modal stack
 * 2. setModalstate: set modal stack state
 */

import { ReactNode } from 'react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IModalStore {
  modalState: Array<ModalContentsProps>;
  setModalState: (modalContents: Array<ModalContentsProps>) => void;
  resetModalState: () => void;
}

export interface ModalContentsProps {
  key: string;
  component: ReactNode;
  componentProps?: any;
  isDisalbedBackdropClick?: boolean;
  isBackdropTransparent?: boolean;
}

export const modalStore = create<IModalStore>()(
  devtools(set => ({
    modalState: [],
    setModalState: (modalContents: Array<ModalContentsProps>) => {
      return set({ modalState: modalContents });
    },
    resetModalState: () => set({ modalState: [] }),
  })),
);
