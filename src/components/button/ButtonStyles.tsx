import styled from 'styled-components';
import { ButtonBaseStyles, IButtonBaseStyles } from './ButtonBaseStyles';

interface IButtonAttrs extends IButtonBaseStyles {
  isLoading?: boolean;
  disabled?: boolean;
}

export const ButtonStyles = styled.button.attrs((props: IButtonAttrs) => {
  return {
    'aria-disabled': props.disabled,
  };
})<IButtonBaseStyles>`
  ${ButtonBaseStyles}
  &:hover {
    background-color: var(--red);
  }
  svg {
    margin-left: ${({ iconPosition, icon }) =>
      icon && iconPosition === 'left' ? '0px' : '10px'};
  }
`;
