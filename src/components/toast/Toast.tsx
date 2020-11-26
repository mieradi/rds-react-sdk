/**
 * @name Toast
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
import React, { useEffect } from 'react';

import {
  ToastStyles,
  ToastContainerStyles,
  ToastCloseButtonWrapperStyles,
  ToastContentWrapperStyles,
} from '@/components/toast/ToastStyles';
import { SVG } from '@/icons/base/SVG';

interface ToastObjectProps {
  id: string;
  type: string;
  title: string;
  message?: string;
}

interface ToastProps {
  toasts: Array<ToastObjectProps>;
  setToasts: Function;
}
export const Toast: React.FC<ToastProps> = ({
  toasts,
  setToasts,
}): React.ReactElement => {
  useEffect(() => {
    if (toasts !== undefined && toasts.length > 0) {
      const interval = setInterval(() => {
        autoDeleteToast(toasts, setToasts);
      }, 2000);
      return () => {
        clearInterval(interval);
      };
    } else return;
  }, [toasts]);

  return (
    <ToastContainerStyles>
      {toasts !== undefined &&
        toasts.length > 0 &&
        toasts.map((toast, i) => (
          <ToastStyles key={i} id={`${i}`} type={toast.type}>
            <ToastCloseButton
              toasts={toasts}
              toast={toast}
              handleDelete={setToasts}
            />
            <ToastContentWrapperStyles>
              <ToastIcon type={toast.type} />
              <h2>{toast.title}</h2>
              {toast.message && <p>{toast.message}</p>}
            </ToastContentWrapperStyles>
          </ToastStyles>
        ))}
    </ToastContainerStyles>
  );
};

/**
 * @name ToastCloseButton
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

interface ToastCloseButtonProps {
  toasts: Array<ToastObjectProps>;
  handleDelete: Function;
  toast: ToastObjectProps;
}

const ToastCloseButton: React.FC<ToastCloseButtonProps> = ({
  toast,
  toasts,
  handleDelete,
}): JSX.Element => {
  return (
    <ToastCloseButtonWrapperStyles
      id={`${toast.id}`}
      onClick={(e) => {
        // filter toasts
        const filtered = filterToastArray(toasts, e);
        // set toasts
        handleDelete([...filtered]);
      }}
    >
      <SVG width="15px" hoverColor="var(--black)" fill="var(--grey)">
        <path d="M15.396 12L24 20.604 20.604 24 12 15.396 3.396 24 0 20.604 8.604 12 0 3.396 3.396 0 12 8.604 20.604 0 24 3.396z" />
      </SVG>
    </ToastCloseButtonWrapperStyles>
  );
};

/**
 * @name ToastIcon
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

interface ToastIconProps {
  type: string;
}
const ToastIcon: React.FC<ToastIconProps> = ({ type }): JSX.Element => {
  const toastIcons = {
    error: (
      <path d="M13.339 1.75a1.54 1.54 0 0 0-1.33-.75c-.551 0-1.055.285-1.33.75L.206 19.749a1.47 1.47 0 0 0 0 1.502c.29.465.795.751 1.33.751h20.946c.55 0 1.056-.285 1.315-.75.265-.465.27-1.033.015-1.503L13.34 1.75zm.2 17.246H10.48v-3.005h3.059v3.005zm0-4.506H10.48V8.48h3.059v6.01z" />
    ),
    info: (
      <path d="M10.8 8.074a1.615 1.615 0 0 1-.48-1.2c0-.48.154-.891.48-1.2.326-.308.72-.48 1.2-.48s.891.155 1.2.48c.309.326.48.72.48 1.2s-.154.892-.48 1.2a1.714 1.714 0 0 1-1.2.515c-.48 0-.891-.189-1.2-.515zm2.914 3.943a1.866 1.866 0 0 0-.531-1.183c-.343-.325-.72-.514-1.183-.531h-1.714c-.463.034-.823.223-1.183.531a1.748 1.748 0 0 0-.532 1.183h1.715v5.143c.034.463.188.857.531 1.183.343.343.72.531 1.183.531h1.714c.463 0 .823-.188 1.183-.531.343-.326.514-.72.532-1.183h-1.715V12v.017zM12 2.263c-5.383 0-9.771 4.354-9.771 9.737S6.617 21.771 12 21.771c5.383 0 9.771-4.371 9.771-9.771S17.383 2.246 12 2.246v.017zM12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.651 0 12 5.383 0 12 0z" />
    ),
    warning: (
      <path d="M12 2.229c5.383 0 9.771 4.388 9.771 9.771 0 5.383-4.388 9.771-9.771 9.771A9.789 9.789 0 0 1 2.229 12c0-5.383 4.388-9.771 9.771-9.771zM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm1.714 5.143h-3.428v8.571h3.428V5.143zm0 10.286h-3.428v3.428h3.428V15.43z" />
    ),
    success: (
      <path d="M23.503 10.598l-1.62-2.01a2.25 2.25 0 0 1-.463-1.155l-.285-2.547A2.265 2.265 0 0 0 19.14 2.89l-2.548-.285c-.45-.045-.84-.239-1.17-.494L13.416.494a2.256 2.256 0 0 0-2.817 0l-2.01 1.62a2.25 2.25 0 0 1-1.155.465l-2.547.285a2.264 2.264 0 0 0-1.995 1.993l-.285 2.549c-.045.45-.238.84-.493 1.17L.494 10.58a2.256 2.256 0 0 0 0 2.817l1.62 2.01c.255.33.42.72.465 1.155l.285 2.547a2.264 2.264 0 0 0 1.993 1.995l2.549.285c.45.045.84.238 1.17.493l2.008 1.62a2.255 2.255 0 0 0 2.817 0l2.01-1.62c.33-.255.72-.42 1.155-.465l2.547-.285a2.264 2.264 0 0 0 1.995-1.993l.285-2.549c.045-.45.238-.84.493-1.17l1.62-2.008a2.256 2.256 0 0 0 0-2.817l-.003.002zM9.758 18L4.51 12.756l2.25-2.25 2.997 3 7.495-7.495L19.5 8.334l-9.743 9.667z"></path>
    ),
  };

  return <SVG width="30px">{toastIcons[type]}</SVG>;
};

/**
 * @name filterToastArray
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
const filterToastArray = (toasts: Array<ToastObjectProps>, e: any) => {
  return toasts.filter((toast) => {
    return toast.id !== e.currentTarget.id;
  });
};

/**
 * @name autoDeleteToast
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
const autoDeleteToast = (
  toasts: Array<ToastObjectProps>,
  setToasts: Function
) => {
  if (toasts.length > 0) {
    const filtered = toasts.splice(1);
    setToasts(filtered);
  }
};
