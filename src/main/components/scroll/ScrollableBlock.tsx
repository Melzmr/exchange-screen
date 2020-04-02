import React from 'react';
import {Carousel} from 'react-responsive-carousel';

export interface IScrollableBlockProps {
  className?: string;
}

export const ScrollableBlock: React.FC<IScrollableBlockProps> = ({children, className}) => {
  return (
      <Carousel
          showArrows={false}
          infiniteLoop={true}
          emulateTouch={true}
          showThumbs={false}
          showStatus={false}
          className="responsive_block"
      >
        {children}
      </Carousel>
  );
};

ScrollableBlock.displayName = 'ScrollableBlock';
