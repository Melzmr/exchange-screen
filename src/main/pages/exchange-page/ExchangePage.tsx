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
import {formatNumberToString} from '../../core/calculation-utils';
import {fetchExchangeRateApi, getCrossRate} from './ExchangePageModel';
import {exchangeRateDataTypes} from '../../core/actions/exchangeRateDataTypes';
import {IExchangeRateDataState} from '../../core/reducers/reduceExchangeRateData';
import {setPollingFetch} from '../../core/fetch-utils';

export enum LastTouched {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export const ExchangePage = () => {
  const pockets = useSelector<IAppState, IPocketsState>(state => state.pockets);
  const pocketsValues = Object.values(pockets);
  const {data, errors} = useSelector<IAppState, IExchangeRateDataState>(state => state.exchangeRateData);
  const dispatch = useDispatch<Dispatch<pocketsTypes | exchangeRateDataTypes>>();
  const [selectedTop, setSelectedTop] = React.useState<IPocket>(pocketsValues[0]);
  const [selectedBottom, setSelectedBottom] = React.useState<IPocket>(pocketsValues[0]);
  const [amountTop, setAmountTop] = React.useState<string | ''>('');
  const [amountBottom, setAmountBottom] = React.useState<string | ''>('');
  const [lastTouched, setLastTouched] = React.useState<LastTouched>(LastTouched.TOP);
  const [insufficientFundsError, setInsufficientFundsError] = React.useState(false);

  React.useEffect(() => {
        const abortFetch = setPollingFetch(() => fetchExchangeRateApi(dispatch), 10000);
        return () => abortFetch()
      },
      [dispatch]
  );

  React.useEffect(() => {
    setSelectedTop((prevPocket) => pockets[prevPocket.name]);
    setSelectedBottom((prevPocket) => pockets[prevPocket.name]);
  }, [pockets]);

  React.useEffect(() => {
    if (amountTop && amountBottom) {
      if (lastTouched === LastTouched.BOTTOM) {
        updateTopAmount({
          ...selectedBottom,
          value: amountBottom,
        });
      } else {
        updateBottomAmount({
          ...selectedTop,
          value: amountTop
        });
      }
    }
  }, [data]);

  if (errors) {
    return (
        <ErroredPage>
          {errors.message}
        </ErroredPage>
    )
  }

  if (!data) {
    return (
        <LoadingPage>
          {'Loading'}
        </LoadingPage>
    )
  }

  const crossRate = getCrossRate(selectedTop, selectedBottom, data.rates, data.base);

  const updateTopAmount = (pocket: IPocket) => {
    const topRate = data.rates[selectedTop.name];
    const botRate = data.rates[selectedBottom.name];
    const parsedAmount = parseFloat(pocket.value);
    if (topRate === botRate || isNaN(parsedAmount)) {
      setAmountTop(pocket.value);
    } else if (pocket.name === data.base) {
      setAmountTop(formatNumberToString(parsedAmount * topRate));
    } else {
      setAmountTop(formatNumberToString(parsedAmount * topRate / botRate))
    }
  };

  const updateBottomAmount = (pocket: IPocket) => {
    const topRate = data.rates[selectedTop.name];
    const botRate = data.rates[selectedBottom.name];
    const parsedAmount = parseFloat(pocket.value);
    if (topRate === botRate || isNaN(parsedAmount)) {
      setAmountBottom(pocket.value);
    } else if (pocket.name === data.base) {
      setAmountBottom(formatNumberToString(parsedAmount * botRate));
    } else {
      setAmountBottom(formatNumberToString(parsedAmount * botRate / topRate));
    }
  };

  const handleChangeTopPocket = (pocketIndex: number) => {
    resetAmounts();
    setSelectedTop(pocketsValues[pocketIndex]);
  };

  const handleChangeBottomPocket = (pocketIndex: number) => {
    resetAmounts();
    setSelectedBottom(pocketsValues[pocketIndex]);
  };

  const handleTopAmountChange = (pocket: IPocket | '') => {
    setLastTouched(LastTouched.TOP);
    setInsufficientFundsError(false);
    if (pocket) {
      updateBottomAmount(pocket);
      setAmountTop(pocket.value);
    } else {
      resetAmounts();
    }
  };

  const handleBottomAmountChange = (pocket: IPocket | '') => {
    setLastTouched(LastTouched.BOTTOM);
    setInsufficientFundsError(false);
    if (pocket) {
      updateTopAmount(pocket);
      setAmountBottom(pocket.value);
    } else {
      resetAmounts();
    }
  };

  const handleExchangeClick = () => {
    if (amountTop && amountBottom) {
      if (parseFloat(amountTop) > parseFloat(selectedTop.value)) {
        setInsufficientFundsError(true);
        return;
      }
      dispatch({
        type: SUBTRACT_MONEY,
        payload: {...selectedTop, value: amountTop}
      });
      dispatch({
        type: ADD_MONEY,
        payload: {...selectedBottom, value: amountBottom}
      });
      resetAmounts();
    }
  };

  const resetAmounts = () => {
    setInsufficientFundsError(false);
    setAmountTop('');
    setAmountBottom('');
  };

  return (
      <div className="page_container">
        <Header
            exchangeOnClick={handleExchangeClick}
            selectedTop={selectedTop}
            selectedBottom={selectedBottom}
            crossRate={crossRate}
            disabled={!amountTop || !amountBottom}
        />

        <ScrollableBlock
            afterChange={handleChangeTopPocket}
            beforeChange={resetAmounts}
            className="input_container_top"
        >
          {pocketsValues.map((pocket, i) => (
              <InputBlock
                  key={i}
                  pocket={pocket}
                  amount={amountTop}
                  onAmountChange={handleTopAmountChange}
                  bottomLabel={insufficientFundsError && (
                      <span className="insufficient_funds_error">
                        {'Insufficient funds'}
                      </span>
                  )}
                  amountPrefix={'-'}
              />
          ))}
        </ScrollableBlock>
        <ScrollableBlock
            afterChange={handleChangeBottomPocket}
            beforeChange={resetAmounts}
            className="triangle input_container_bottom"
        >
          {pocketsValues.map((pocket, i) => (
              <InputBlock
                  key={i}
                  pocket={pocket}
                  amount={amountBottom}
                  onAmountChange={handleBottomAmountChange}
                  amountPrefix={'+'}
                  bottomLabel={selectedTop.name !== selectedBottom.name && (
                      <span className="input_block_bottom_currency">
                        <span className="input_block_currency_symbol">
                          {selectedTop.currency}
                        </span>
                        {'1 = '}
                        <span className="input_block_currency_symbol">
                          {selectedBottom.currency}
                        </span>
                        {crossRate}
                      </span>
                  )}
              />
          ))}
        </ScrollableBlock>
      </div>
  );
};

ExchangePage.displayName = 'ExchangePage';
