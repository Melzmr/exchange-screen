import React from 'react';
import './Header.css';
import {IPocket} from '../../core/reducers/reducePockets';

export interface IHeaderProps {
  exchangeOnClick: () => void;
  selectedTop: IPocket;
  selectedBottom: IPocket;
  crossRate: number;
  disabled: boolean;
}

export const Header = ({exchangeOnClick, selectedTop, selectedBottom, crossRate, disabled}: IHeaderProps) => {
  console.log(selectedTop);
  console.log(selectedBottom);
  return (
      <div className="header_container">
        <header className="header_inner_container">
          <div className="header_cancel">
            {'Cancel'}
          </div>
          {selectedTop.name !== selectedBottom.name && (
              <div className="header_currency">
                <span className="header_currency_symbol">
                  {selectedTop.currency}
                </span>
                {'1 = '}
                <span className="header_currency_symbol">
                  {selectedBottom.currency}
                </span>
                {crossRate}
              </div>
          )}
          <div className="header_exchange">
            <button
                className={`header_exchange_button ${disabled ? 'header_exchange_disabled_button' : ''}`}
                onClick={disabled ? undefined : exchangeOnClick}
            >
              {'Exchange'}
            </button>
          </div>
        </header>
      </div>
  )
};

Header.displayName = 'Header';
