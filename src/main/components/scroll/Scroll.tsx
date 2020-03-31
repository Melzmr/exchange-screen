import React, {CSSProperties} from 'react';

export interface IScrollProps {
  className?: string;
  style?: CSSProperties;
}

export const Scroll: React.FC<IScrollProps> = ({children, className, style}) => {
  return (
      <div
          className={className}
          style={style}
      >
        {children}
      </div>
  );
};

Scroll.displayName = 'Scroll';
