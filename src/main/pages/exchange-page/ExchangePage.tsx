import React from 'react';
import './ExchangePage.css';
import {useExchangeRateApi} from './ExchangePageHooks';
import {ScrollableBlock} from '../../components/scroll/ScrollableBlock';
import {InputBlock} from '../../components/input-block/InputBlock';
import {Header} from '../../components/header/Header';
import {ErroredPage} from '../errored-page/ErroredPage';
import {LoadingPage} from '../loading-page/LoadingPage';

export const ExchangePage = () => {
  const [{data, loading, errored}] = useExchangeRateApi();

  if (loading) {
    return (
        <LoadingPage>
          {'Loading mazafucka'}
        </LoadingPage>
    )
  }

  if (errored) {
    return (
        <ErroredPage>
          {errored.message}
        </ErroredPage>
    )
  }

  console.log(data);

  return (
      <div className="page_container">
        <Header/>
        <ScrollableBlock className="hui">
          <InputBlock style={{backgroundColor: 'blue'}}/>
          <InputBlock style={{backgroundColor: 'red'}}/>
          <InputBlock style={{backgroundColor: 'yellow'}}/>
        </ScrollableBlock>
        <ScrollableBlock className="hui">
          <InputBlock style={{backgroundColor: 'blue'}}/>
          <InputBlock style={{backgroundColor: 'red'}}/>
          <InputBlock style={{backgroundColor: 'yellow'}}/>
        </ScrollableBlock>
      </div>
  );
};

ExchangePage.displayName = 'ExchangePage';
