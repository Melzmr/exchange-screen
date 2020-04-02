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

  if (loading || !data) {
    return (
        <LoadingPage>
          {'Loading'}
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

  return (
      <div className="page_container">
        <Header/>
        <ScrollableBlock>
          <InputBlock style={{backgroundColor: 'blue'}}/>
          <InputBlock style={{backgroundColor: 'red'}}/>
          <InputBlock style={{backgroundColor: 'yellow'}}/>
        </ScrollableBlock>
        <ScrollableBlock>
          <InputBlock style={{backgroundColor: 'blue'}}/>
          <InputBlock style={{backgroundColor: 'red'}}/>
          <InputBlock style={{backgroundColor: 'yellow'}}/>
        </ScrollableBlock>
      </div>
  );
};

ExchangePage.displayName = 'ExchangePage';
