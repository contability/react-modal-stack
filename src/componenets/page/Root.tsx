import styled from 'styled-components';
import useModal from '../../hooks/useModal';
import Button from '../shared/Button';
import ModalContainer from '../shared/Modal';
import AlertPanel from '../shared/Modal/AlertPanel';
import ConfirmPanel from '../shared/Modal/ConfirmPanel';
import Input from '../shared/Input';

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

  const modal_confirm01 = {
    key: 'confirm01',
    component: (
      <ModalContainer>
        <ConfirmPanel
          header="CONFIRM01"
          contents={
            <>
              <p>모달 하나 더 열기</p>
            </>
          }
          onConfirm={() => modalPush(modal_confirm02)}
        />
      </ModalContainer>
    ),
  };

  const modal_confirm02 = {
    key: 'confirm02',
    component: (
      <ModalContainer isDisalbedBackdropClick={true}>
        <ConfirmPanel
          header="CONFIRM02"
          contents={
            <>
              <p>두번째 confirm</p>
              <Button label="pop" onClick={() => modalPop()}></Button>
            </>
          }
          onConfirm={() => modalPush(modal_confirm03)}
        />
      </ModalContainer>
    ),
  };

  const modal_confirm03 = {
    key: 'confirm03',
    component: (
      <ModalContainer isDisalbedBackdropClick={true}>
        <ConfirmPanel
          header="CONFIRM03"
          contents={
            <>
              <p>세번째 confirm</p>
              <p>confirm 누르면 clear</p>
            </>
          }
          onConfirm={() => modalClear()}
        />
      </ModalContainer>
    ),
  };

  const modal_form01 = {
    key: 'form01',
    component: (
      <>
        <ModalContainer>
          <ConfirmPanel
            header="FORM01"
            contents={
              <div style={{ width: '100%' }}>
                <Input type="number" placeholder="input type number" />
              </div>
            }
            onConfirm={() => modalPush(modal_confirm01)}
          />
        </ModalContainer>
      </>
    ),
  };

  const modal_clear01 = {
    key: 'clear01',
    component: (
      <>
        <ModalContainer>
          <ConfirmPanel header="CLEAR01" contents={<></>} onConfirm={() => modalClear()} />
        </ModalContainer>
      </>
    ),
  };
  // #endregion

  return (
    <>
      <PageContainer>
        <Button label="ALERT 01" onClick={() => modalPush(modal_alert01)} />
        <Button label="CONFIRM 01" onClick={() => modalPush(modal_confirm01)} />
        <Button label="FORM 01" onClick={() => modalPush(modal_form01)} />
        <Button label="clear" onClick={() => modalClear()}></Button>
      </PageContainer>
      <Modal />
    </>
  );
};

export default RootPage;
