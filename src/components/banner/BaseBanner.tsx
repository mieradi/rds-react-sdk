import React from 'react';
import { BannerStyles } from '../banner/BannerStyles';
import { UBlockStyles } from '../uBlock/UBlockStyles';

type BaseBannerProps = {
  title?: string;
};

export const BaseBanner: React.FunctionComponent<BaseBannerProps> = ({
  title,
}) => {
  return (
    <UBlockStyles backgroundColor={'grey'}>
      <BannerStyles>
        <section>
          <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>
        </section>
      </BannerStyles>
    </UBlockStyles>
  );
};
