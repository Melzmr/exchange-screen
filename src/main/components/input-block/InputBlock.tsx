import React from 'react';
import './InputBlock.css'
import {IPocket} from '../../core/reducers/reducePockets';
import {Input} from '../input/Input';

export interface IInputBlockProps {
  pocket: IPocket;
  onAmountChange: (pocket: IPocket | '') => void;
  amount: string;
  amountPrefix?: string;
  className?: string;
  bottomLabel?: React.ReactNode;
}

export const InputBlock = ({pocket, onAmountChange, amount, amountPrefix, className, bottomLabel}: IInputBlockProps) => {
  const [inputWidth, setInputWidth] = React.useState<number>(1);

  React.useEffect(() => {
    const amountLength = amount.toString().length;
    if (amountLength) {
      setInputWidth(amountLength);
    } else {
      setInputWidth(1);
    }
  }, [amount]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validFloat = event.target.value.match(/^[0-9]{0,4}[.]?[0-9]{0,2}/)?.[0];
    if (validFloat) {
      onAmountChange(
          {
            ...pocket,
            value: validFloat,
          }
      );
    } else {
      onAmountChange('');
    }
  };

  return (
      <div className={`input_block_inner_container ${className ? className : ''}`}>
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
            <Input
                style={{width: inputWidth + 'ch'}}
                value={amount}
                onChange={handleOnChange}
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
