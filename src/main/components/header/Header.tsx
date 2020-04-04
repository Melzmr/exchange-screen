import React from 'react';
import './Header.css';

export interface IHeaderProps {
  exchangeOnClick: () => void;
}

export const Header = ({exchangeOnClick}: IHeaderProps) => {
  return (
      <div style={{height: '18px'}}>
        <header className="header_container">
          <div>
            {'Cancel'}
          </div>
          <div>
            {'Pockets'}
          </div>
          <div onClick={exchangeOnClick}>
            {'Exchange'}
          </div>
        </header>
      </div>
  )
};

Header.displayName = 'Header';
