import React, {CSSProperties} from 'react';
import './Input.css';

export interface IInputProps {
  value: string | '';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style: CSSProperties;
}

export const Input = ({value, onChange, style}: IInputProps) => (
    <input
        className="input_base"
        type="text"
        style={style}
        value={value}
        onChange={onChange}
        inputMode="numeric"
        pattern="[0-9]*"
    />
)

Input.displayName = 'Input';
