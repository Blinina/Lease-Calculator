import { React, useState } from "react";
import axios from 'axios';
import {
  url, minPrice, maxPrice, minPayment, maxPayment, localeOptions,
  minPeriod, maxPeriod
} from "./utils/utils";

function App() {
  const interestRate = 0.035;
  const percent = 100;
  const [cost, setCost] = useState('3300000');
  const [fee, setFee] = useState('10');
  const [period, setPeriod] = useState('60');
  const [loading, isLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      isLoading(true);
      const data = {
        car_coast: cost,
        initail_payment: feeValue,
        initail_payment_percent: fee,
        lease_term: period,
        total_sum: totalSum,
        monthly_payment_from: monthPay
      };
      const response = await axios.post(url, data);
      console.log(response.status);
      isLoading(false);
    } catch (error) {
      console.log(error);
      isLoading(false);
    }
  }

  const getCost = (e) => {
    let { value } = e.target;
    if (value > maxPrice) {
      return;
    }
    setCost(value);
  }
  const getFee = (e) => {
    let { value } = e.target;
    if (value > maxPayment) {
      return;
    }
    setFee(value);
  }
  const getPeriod = (e) => {
    let { value } = e.target;
    if (value > maxPeriod) {
      return;
    }
    setPeriod(value);
  }

  const feeValue = Math.round(((fee * cost) / percent) * percent) / percent;
  const monthPay = Math.round((cost - feeValue) * ((interestRate * Math.pow((1 + interestRate), period)) / (Math.pow((1 + interestRate), period) - 1)));
  const totalSum = Math.round(feeValue + period * monthPay);

  return (
    <div className="app">
      <h1 className='title'>Рассчитайте стоимость автомобиля в лизинг</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="container">
          <div className="item">
            <p>Стоимость автомобиля</p>
            <div className="relative">
              <div className="wrapper-normal">
                <input
                  type="number"
                  required
                  className="inp-normal"
                  value={cost}
                  onChange={(e) => getCost(e)}
                  disabled={loading}
                />
                <span><h3 className={loading && "span-disable"}>₽</h3></span>
              </div>
              <input
                type="range"
                className="absolute"
                value={cost}
                onChange={(e) => getCost(e)} id="cost"
                name="cost"
                min={minPrice}
                max={maxPrice}
                disabled={loading}
              />
            </div>
          </div>
          <div className="item">
            <p>Первоначальный взнос</p>
            <div className="relative">
              <div className="fee-input field ">
                <div className="fee-container">
                  <span><h3 className={loading && "span-disable"}>{feeValue}</h3></span>
                  <div className="wrapper">
                    <input
                      type="number"
                      className="inp-fee"
                      value={fee}
                      onChange={(e) => getFee(e)}
                      name="fee"
                      disabled={loading}
                    />
                    <span className={loading && "span-disable"}>%</span>
                  </div>
                </div>
              </div>
              <input
                type="range"
                className="absolute"
                value={fee}
                onChange={(e) => getFee(e)}
                id="fee"
                name="fee"
                min={minPayment}
                max={maxPayment}
                disabled={loading}
              />
            </div>
          </div>
          <div className="item">
            <p>Срок лизинга</p>
            <div className="relative">
              <div className="wrapper-normal">
                <input
                  type="number"
                  className="inp-normal"
                  value={period}
                  onChange={(e) => getPeriod(e)}
                  disabled={loading}
                />
                <span><h3 className={loading && "span-disable"}>мес.</h3></span>
              </div>
              <input
                type="range"
                className="absolute"
                value={period} onChange={(e) => getPeriod(e)}
                id="period"
                name="period"
                min={minPeriod}
                max={maxPeriod}
                disabled={loading}
              />
            </div>
          </div>
        </div>
        <div className="result">
          <div className="result-item">
            <p className="result-text" >Сумма договора лизинга</p>
            <h1 className="sum">{totalSum.toLocaleString('ru-RU', localeOptions)}</h1>
          </div>
          <div className="result-item">
            <p className="result-text" >Ежемесячный платеж от</p>
            <h1 className="sum">{monthPay.toLocaleString('ru-RU', localeOptions)}</h1>
          </div>
          <button type='submit' className="btn" disabled={loading}><h3>Оставить заявку</h3></button>
        </div>
      </form>
    </div>
  );
};

export default App;
