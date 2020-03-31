import React from 'react';
import './Header.css';

export const Header = () => {
  return (
      <div style={{height: '18px'}}>
        <header className="header_container">
          <div>
            {'Cancel'}
          </div>
          <div>
            {'Pockets'}
          </div>
          <div>
            {'Exchange'}
          </div>
        </header>
      </div>
  )
};

Header.displayName = 'Header';
