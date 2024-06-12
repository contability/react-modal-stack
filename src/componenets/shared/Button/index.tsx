import styled from 'styled-components';

const ButtonWrapper = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #000000;
  color: #ffffff;
`;

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{label}</ButtonWrapper>;
};

export default Button;
