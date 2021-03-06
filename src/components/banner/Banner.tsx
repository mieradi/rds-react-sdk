import React from 'react';
import { BannerStyles } from './BannerStyles';
import { UBlock } from '../UBlock/UBlock';
import { Button } from '@components/button/Button';
import { IButton } from '../../types/button/IButton';

type BannerProps = {
  title?: string;
  isIntranet?: boolean;
  buttons?: IButton[];
  imageSrc?: string;
  backgroundShade?: 'light' | 'dark';
  textShade?: 'light' | 'dark';
  backgroundPosition?: 'top' | 'bottom';
};

export const Banner: React.FunctionComponent<BannerProps> = ({
  title,
  isIntranet,
  buttons,
  imageSrc,
  backgroundPosition,
  backgroundShade,
  textShade,
}) => {
  return (
    <UBlock backgroundColor={'grey'} full>
      <BannerStyles
        isIntranet={isIntranet}
        imageSrc={imageSrc}
        backgroundPosition={backgroundPosition}
        backgroundShade={backgroundShade}
        textShade={textShade}
      >
        <section>
          <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>

          {buttons && (
            <p>
              {buttons.map((button, i) => (
                <Button key={`button-${i}`} {...button} />
              ))}
            </p>
          )}
        </section>
      </BannerStyles>
    </UBlock>
  );
};
