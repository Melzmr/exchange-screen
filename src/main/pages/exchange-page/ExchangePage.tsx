import React from 'react';
import './ExchangePage.css';
import {Header} from '../../components/header/Header';
import {ErroredPage} from '../errored-page/ErroredPage';
import {LoadingPage} from '../loading-page/LoadingPage';
import {useDispatch, useSelector} from 'react-redux';
import {IAppState} from '../../core/createStore';
import {IPocket, IPocketsState} from '../../core/reducers/reducePockets';
import {ADD_MONEY, pocketsTypes, SUBTRACT_MONEY} from '../../core/actions/pocketsTypes';
import {Dispatch} from 'redux';
import {ScrollableBlock} from '../../components/scroll/ScrollableBlock';
import {InputBlock} from '../../components/input-block/InputBlock';
import {formatNumber} from '../../core/calculation-utils';
import {fetchExchangeRateApi} from './ExchangePageModel';
import {exchangeRateDataTypes} from '../../core/actions/exchangeRateDataTypes';
import {IExchangeRateDataState} from '../../core/reducers/reduceExchangeRateData';
import {setPollingFetch} from '../../core/fetch-utils';

export enum LastTouched {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export const ExchangePage = () => {
  const pockets = Object.values(useSelector<IAppState, IPocketsState>(state => state.pockets));
  const {data, errors} = useSelector<IAppState, IExchangeRateDataState>(state => state.exchangeRateData);
  const dispatch = useDispatch<Dispatch<pocketsTypes | exchangeRateDataTypes>>();
  const [selectedTop, setSelectedTop] = React.useState<IPocket>(pockets[0]);
  const [selectedBottom, setSelectedBottom] = React.useState<IPocket>(pockets[0]);
  const [amountTop, setAmountTop] = React.useState<number | ''>('');
  const [amountBottom, setAmountBottom] = React.useState<number | ''>('');
  const [lastTouched, setLastTouched] = React.useState<LastTouched>(LastTouched.TOP);

  React.useEffect(() => {
        const abortFetch = setPollingFetch(() => fetchExchangeRateApi(dispatch), 10000);
        return () => abortFetch()
      },
      [dispatch]
  );

  React.useEffect(() => {
    if (amountTop && amountBottom) {
      if (lastTouched === LastTouched.BOTTOM) {
        setAmountTop(amountTop * 2);
      } else {
        setAmountBottom(amountBottom * 3);
      }
    }
  }, [data]);

  if (!data) {
    return (
        <LoadingPage>
          {'Loading'}
        </LoadingPage>
    )
  }

  if (errors) {
    return (
        <ErroredPage>
          {errors.message}
        </ErroredPage>
    )
  }

  const handleChangeTopPocket = (slide: number) => {
    resetAmounts();
    setSelectedTop(pockets[slide]);
  };

  const handleChangeBottomPocket = (slide: number) => {
    resetAmounts();
    setSelectedBottom(pockets[slide]);
  };

  const handleTopAmountChange = (pocket: IPocket | '') => {
    setLastTouched(LastTouched.TOP);
    if (pocket) {
      const topRate = data.rates[selectedTop.name];
      const botRate = data.rates[selectedBottom.name];
      setAmountBottom(
          topRate === botRate
              ? pocket.value
              : formatNumber(pocket.value * topRate / botRate)
      );
      setAmountTop(pocket.value);
    } else {
      setAmountTop(pocket);
      setAmountBottom(pocket);
    }
  };

  const handleBottomAmountChange = (pocket: IPocket | '') => {
    setLastTouched(LastTouched.BOTTOM);
    if (pocket) {
      const topRate = data.rates[selectedTop.name];
      const botRate = data.rates[selectedBottom.name];
      setAmountTop(
          topRate === botRate
              ? pocket.value
              : formatNumber(pocket.value * botRate / topRate)
      );
      setAmountBottom(pocket.value);
    } else {
      setAmountTop(pocket);
      setAmountBottom(pocket);
    }
  };

  const handleExchangeClick = () => {
    if (amountTop && amountBottom) {
      dispatch({
        type: SUBTRACT_MONEY,
        payload: {...selectedTop, value: amountTop}
      });
      dispatch({
        type: ADD_MONEY,
        payload: {...selectedBottom, value: amountBottom}
      });
      resetAmounts()
    }
  };

  const resetAmounts = () => {
    setAmountTop('');
    setAmountBottom('');
  };

  return (
      <div className="page_container">
        <Header exchangeOnClick={handleExchangeClick}/>

        <ScrollableBlock
            afterChange={handleChangeTopPocket}
            beforeChange={resetAmounts}
        >
          {pockets.map((pocket, i) => (
              <InputBlock
                  key={i}
                  pocket={pocket}
                  amount={amountTop}
                  onAmountChange={handleTopAmountChange}
                  //kotirovki ne nad
                  //minus sign or plus sign
              />
          ))}
        </ScrollableBlock>
        <ScrollableBlock
            afterChange={handleChangeBottomPocket}
            beforeChange={resetAmounts}
        >
          {pockets.map((pocket, i) => (
              <InputBlock
                  key={i}
                  pocket={pocket}
                  amount={amountBottom}
                  onAmountChange={handleBottomAmountChange}
              />
          ))}
        </ScrollableBlock>
      </div>
  );
};

ExchangePage.displayName = 'ExchangePage';
