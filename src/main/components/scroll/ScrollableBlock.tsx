import React from 'react';
import Slider, {Settings} from 'react-slick';

export interface IScrollableBlockProps extends Settings {
  className?: string;
}


export const ScrollableBlock: React.FC<IScrollableBlockProps> = ({children, ...props}) => {

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'responsive_block',
    accessibility: true,
    arrows: false,
  };

  return (
      <Slider
          {...settings}
          {...props}
          // className="responsive_block"
      >
        {children}
      </Slider>
  );
};

ScrollableBlock.displayName = 'ScrollableBlock';
