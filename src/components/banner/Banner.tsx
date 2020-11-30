import React from 'react';
import { BannerStyles } from './BannerStyles';
import { UBlock } from '../UBlock/UBlock';
import { Button, ButtonProps } from '@/components/button/Button';

type BannerProps = {
  title?: string;
  isIntranet?: boolean;
  imageSrc?: string;
  buttons?: ButtonProps[];
  imagePosition?: string;
  wide?: boolean;
  backgroundShade?: 'light' | 'dark';
  backgroundPosition?: 'top' | 'bottom';
};

export const Banner: React.FunctionComponent<BannerProps> = ({
  title,
  isIntranet,
  buttons,
  imagePosition,
  wide,
  imageSrc,
  backgroundPosition,
  backgroundShade,
}) => {
  return (
    <UBlock backgroundColor={'grey'}>
      <BannerStyles
        wide={wide}
        imagePosition={imagePosition}
        isIntranet={isIntranet}
        imageSrc={imageSrc}
        backgroundPosition={backgroundPosition}
        backgroundShade={backgroundShade}
      >
        <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>

        {buttons && (
          <p>
            {buttons.map((button, i) => (
              <Button key={`button-${i}`} {...button} />
            ))}
          </p>
        )}
      </BannerStyles>
    </UBlock>
  );
};
