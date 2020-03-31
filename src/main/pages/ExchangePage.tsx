import React from 'react';
import './ExchangePage.css';
import {Header} from '../components/header/Header';
import {Scroll} from '../components/scroll/Scroll';
import {InputBlock} from '../components/input-block/InputBlock';

export const ExchangePage = () => {
  return (
      <div className="page_container">
        <Header/>
        <div style={{flex: '1 0 auto', display: 'flex'}}>
          <Scroll style={{flex: '1 0 auto', display: 'flex'}}>
            <InputBlock style={{backgroundColor: 'blue'}}/>
            <InputBlock style={{backgroundColor: 'red'}}/>
            <InputBlock style={{backgroundColor: 'yellow'}}/>
          </Scroll>
        </div>
        <div style={{flex: '1 0 auto', display: 'flex'}}>
          <Scroll style={{flex: '1 0 auto', display: 'flex'}}>
            <InputBlock style={{backgroundColor: 'blue'}}/>
            <InputBlock style={{backgroundColor: 'red'}}/>
            <InputBlock style={{backgroundColor: 'yellow'}}/>
          </Scroll>
        </div>
      </div>
  );
};

ExchangePage.displayName = 'ExchangePage';
