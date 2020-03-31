import React from 'react';
import './ExchangePage.css';
import {Header} from '../components/header/Header';
import {Input} from '../components/input/Input';

export function ExchangePage() {
  return (
      <div className="page_container">
        <Header/>
        <div className="input_container">
          <Input/>
        </div>
        <div className="input_container">
          <Input/>
        </div>
      </div>
  );
}
