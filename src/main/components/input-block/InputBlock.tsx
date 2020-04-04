import React from 'react';
import './InputBlock.css'
import {IPocket} from '../../core/reducers/reducePockets';
import {formatNumber} from '../../core/calculation-utils';

export interface IInputBlockProps {
  pocket: IPocket;
  onAmountChange: (pocket: IPocket | '') => void;
  amount: number | '';
}

export const InputBlock = ({pocket, onAmountChange, amount = 0}: IInputBlockProps) => {

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(event.target.value);
    if (!isNaN(amount)) {
      onAmountChange(
          {
            ...pocket,
            value: formatNumber(amount),
          }
      );
    } else {
      onAmountChange('');
    }
  };

  return (
      <div
          className="input_container"
      >
        <div
            className="carousel_child"
        >
          <div>
            {pocket.name}
          </div>
          <div>
            {pocket.value}{pocket.currency}
          </div>
          <input type="number" step="0.01" value={amount} onChange={handleOnChange}/>
        </div>
      </div>
  )
};

InputBlock.displayName = 'InputBlock';
