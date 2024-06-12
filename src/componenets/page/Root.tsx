import styled from 'styled-components';
import useModal from '../../hooks/useModal';
import Button from '../shared/Button';
import ModalContainer from '../shared/Modal';
import AlertPanel from '../../lib/_modal/AlertPanel';

const PageContainer = styled.main`
  background-color: white;
  width: 100dvw;
  height: 100dvh;
  color: black;
`;

const RootPage = () => {
  const { modalPush, modalPop, modalClear, Modal } = useModal();
  // #region 모달 props
  /**
   * 'alert01' 모달
   */
  const modal_alert01 = {
    key: 'alert01',
    component: (
      <ModalContainer isBackdropTransparent={false} isDisalbedBackdropClick={true}>
        <AlertPanel
          header="ALERT01"
          contents={
            <>
              <p>ALERT</p>
              <p>TEST</p>
            </>
          }
        />
      </ModalContainer>
    ),
  };
  // #endregion

  return (
    <>
      <PageContainer>
        <Button label="ALERT 01" onClick={() => modalPush(modal_alert01)}></Button>
        <Button label="pop" onClick={() => modalPop()}></Button>
        <Button label="clear" onClick={() => modalClear()}></Button>
      </PageContainer>
      <Modal />
    </>
  );
};

export default RootPage;
