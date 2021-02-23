/**
 * @name CustomLink
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { CustomLinkStyles } from '@components/customLink/CustomLinkStyles';
import { IButton } from '../../types/button/IButton';

interface ICustomLink extends IButton {
  url: string;
  title: string;
}

export const CustomLink: React.FC<ICustomLink> = ({
  title,
  url,
}): JSX.Element => {
  return <CustomLinkStyles url={url}>{title}</CustomLinkStyles>;
};
