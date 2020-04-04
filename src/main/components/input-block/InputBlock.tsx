import React from 'react';
import './InputBlock.css'
import {IPocket} from '../../core/reducers/reducePockets';
import {formatNumber} from '../../core/calculation-utils';

export interface IInputBlockProps {
  pocket: IPocket;
  onAmountChange: (pocket: IPocket | '') => void;
  amount: number | '';
  error?: string;
  amountPrefix?: string;
  className?: string;
}

export const InputBlock = ({pocket, onAmountChange, amount, error, amountPrefix, className}: IInputBlockProps) => {

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
      <div className={className}>
        <div>
          {pocket.name}
        </div>
        <div>
          {pocket.value}{pocket.currency}
        </div>
        {amount && amountPrefix}
        <input
            type="number"
            step="0.01"
            value={amount}
            onChange={handleOnChange}
            inputMode="numeric"
            pattern="[0-9]*"
        />
      </div>
  )
};

InputBlock.displayName = 'InputBlock';
