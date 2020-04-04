import React from 'react';
import Slider, {Settings} from 'react-slick';

export interface IScrollableBlockProps extends Settings {
  className?: string;
}


export const ScrollableBlock: React.FC<IScrollableBlockProps> = ({children, className, ...props}) => {

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: `responsive_block ${className ? className : ''}`,
    accessibility: true,
    arrows: false,
  };

  return (
      <Slider
          {...settings}
          {...props}
      >
        {children}
      </Slider>
  );
};

ScrollableBlock.displayName = 'ScrollableBlock';
