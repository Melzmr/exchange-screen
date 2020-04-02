import React, {CSSProperties} from 'react';
import './InputBlock.css'
import {Input} from '../input/Input';

export interface IInputBlockProps {
  style: CSSProperties;
}

export const InputBlock = ({style}: IInputBlockProps) => {
  return (
      <div className="input_container">
        <div
            className="carousel_child"
            style={{...style, width: '100%'}}
        >
          123123123123
        </div>
        {/*<Input/>*/}
      </div>
  )
};

InputBlock.displayName = 'InputBlock';
