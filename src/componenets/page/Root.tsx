import styled from 'styled-components';
import useModal from '../../hooks/useModal';
import Button from '../shared/Button';
import ModalContainer from '../shared/Modal';

const PageContainer = styled.main`
  background-color: white;
  width: 100dvw;
  height: 100dvh;
  color: black;
`;

const RootPage = () => {
  const { modalPush, modalPop, modalClear, Modal } = useModal();
  return (
    <>
      <PageContainer>
        <Button
          label="test"
          onClick={() =>
            modalPush({
              key: 'test',
              component: (
                <ModalContainer isBackdropTransparent={false} isDisalbedBackdropClick={true}>
                  <div style={{ color: 'black' }}>TEST1</div>
                </ModalContainer>
              ),
            })
          }
        ></Button>
        <Button label="pop" onClick={() => modalPop()}></Button>
        <Button label="clear" onClick={() => modalClear()}></Button>
      </PageContainer>
      <Modal />
    </>
  );
};

export default RootPage;
