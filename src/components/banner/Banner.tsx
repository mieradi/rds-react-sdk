import React from 'react';
import { BannerStyles } from './BannerStyles';
import { UBlock } from '../UBlock/UBlock';

type BannerProps = {
  title?: string;
  isIntranet?: boolean;
};

export const Banner: React.FunctionComponent<BannerProps> = ({
  title,
  isIntranet,
}) => {
  return (
    <UBlock backgroundColor={'grey'}>
      <BannerStyles isIntranet={isIntranet}>
        <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>
      </BannerStyles>
    </UBlock>
  );
};
