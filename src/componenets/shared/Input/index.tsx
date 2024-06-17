import { palette } from '../../../styles/theme';
import { ForwardedRef, InputHTMLAttributes, forwardRef, memo } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    font-size: 1.6rem;
    outline: 1px solid ${palette.black};
    padding: 1.6rem;
    flex: 1;
    min-height: 3.2rem;
    border-radius: 6px;
    color: inherit;
    min-width: 3rem;
    -moz-appearance: textfield;

    &::placeholder {
      font-size: 1.6rem;
      color: gray;
    }

    &:focus {
      outline: 1px solid ${palette.black};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

const Input = (
  { type = 'text', placeholder, value, onChange, readOnly, autoFocus, style, name, className = '' }: InputProps,
  ref?: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <InputContainer className={className} ref={ref}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        autoFocus={autoFocus}
        style={style}
        name={name}
      />
    </InputContainer>
  );
};

export default memo(forwardRef(Input));
