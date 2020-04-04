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
  bottomLabel?: React.ReactNode;
}

export const InputBlock = ({pocket, onAmountChange, amount, error, amountPrefix, className, bottomLabel}: IInputBlockProps) => {

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

  const calculateWidth = () => {
    const amountLength = amount.toString().length;
    if (amountLength) {
      return amountLength + 'ch';
    }
    return '1ch';
  };

  return (
      <div className="input_block_inner_container">
        <div className="input_block_col_left">
          <div className="input_block_name">
            {pocket.name}
          </div>
          <div className="input_block_balance">
            You have <span className="input_block_currency_symbol">{pocket.currency}</span>{pocket.value}
          </div>
        </div>
        <div className="input_block_col_right">
          <label className="input_label">
            {amount && (
                <span className="input_prefix">
                  {amountPrefix}
                </span>
            )}
            <input
                type="number"
                step="0.01"
                style={{width: calculateWidth()}}
                value={amount}
                onChange={handleOnChange}
                inputMode="numeric"
                pattern="[0-9]*"
                className="input_block_amount"
            />
            {bottomLabel && (
                <div className="input_block_bottom_label">
                  {bottomLabel}
                </div>
            )}
          </label>
        </div>
      </div>
  )
};

InputBlock.displayName = 'InputBlock';
