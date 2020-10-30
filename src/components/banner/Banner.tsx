import React from 'react';
import { BannerStyles } from './BannerStyles';
import { UBlockStyles } from '../uBlock/UBlockStyles';

type BannerProps = {
  title?: string;
  isIntranet?: boolean;
};

export const Banner: React.FunctionComponent<BannerProps> = ({
  title,
  isIntranet,
}) => {
  return (
    <UBlockStyles backgroundColor={'grey'}>
      <BannerStyles isIntranet={isIntranet}>
        <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>
      </BannerStyles>
    </UBlockStyles>
  );
};
