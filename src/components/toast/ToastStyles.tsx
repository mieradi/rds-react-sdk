/**
 * @name ToastStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';
interface ToastStylesProps {
  type: String;
}

const handleToastType = (toastType: any) => {
  const toastStyles = {
    success: { background: '#fafff5', border: '#45bf2e', svgFill: '#45bf2e' },
    warning: { background: '#fffaf1', border: '#faab08', svgFill: '#faab08' },
    info: {
      background: '#e6f7ff',
      border: '#91d5ff',
      svgFill: '#1496da',
    },
    error: {
      background: 'var(--pink)',
      border: 'var(--red)',
      svgFill: 'var(--red)',
    },
    default: {
      background: 'white',
      border: 'white',
      svgFill: 'var(--black)',
    },
  };
  return toastType ? toastStyles[toastType] : toastStyles.default;
};

export const ToastStyles = styled.div<ToastStylesProps>`
  background: ${({ type }) => handleToastType(type).background};
  border: 1px solid ${({ type }) => handleToastType(type).border};
  width: fit-content;
  min-width: 400px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: var(--ds-y);
  padding: 20px !important;
  margin-bottom: 30px;
  text-align: center;

  svg {
    fill: ${({ type }) => handleToastType(type).svgFill};
  }
`;

/**
 * @name ToastContainerStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
export const ToastContainerStyles = styled.div`
  position: absolute;
  bottom: 0;
  left: 50px;
`;

/**
 * @name ToastCloseButtonWrapperStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
export const ToastCloseButtonWrapperStyles = styled.div`
  text-align: right;
`;
/**
 * @name ToastContentWrapperStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
export const ToastContentWrapperStyles = styled.div`
  position: relative;
  text-align: left;
  padding-left: 50px;
  svg {
    position: absolute;
    left: 0;
    top: -2px;
  }
`;
