import {React, useState} from "react";
function App() {
const interestRate = 0.035;
const percent = 100; 
const [cost, setCost] = useState('3300000');
const [fee, setFee] = useState('10')
const [period, setPeriod] = useState('60')

const  handleSubmit = (e)=>{
  e.stopPropagetion();
  console.log("kek");
}
const feeValue = Math.round(((fee * cost) / percent) * percent) / percent;
const monthPay = Math.round((cost - feeValue) * ((interestRate * Math.pow((1 + interestRate), period)) / (Math.pow((1 + interestRate), period) - 1)));

  return (
    <div className="app">
      <h1 className='title'>Рассчитайте стоимость автомобиля в лизинг</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="container">
          <div className="item">
            <p>Стоимость автомобиля</p>
            <div className="inputs relative">
              <div className="field">
                <input type="number" className="inp-normal" value={cost} onChange={(e) => setCost(e.target.value)} />
                <div class="symbol"><h3>₽</h3></div>
              </div>
              <input type="range" className="absolute" value={cost} onChange={(e) => setCost(e.target.value)} id="cost" name="cost" min="1000000" max="6000000" />
            </div>
          </div>
          <div className="item">
            <p>Первоначальный взнос</p>
            <div className="inputs">
              <div className="fee-container">
                <p>{feeValue}</p>
                <div className="ttf">
                  <input type="number" className="fee-field" value={fee} onChange={(e) => setFee(e.target.value)} name="fee" />
                  <span>%</span>
                </div>
              </div>
              <input type="range" value={fee} onChange={(e) => setFee(e.target.value)} id="fee" name="fee" min="10" max="60" />
            </div>
          </div>
          <div className="item">
            <p>Срок лизинга</p>
            <div className="inputs relative">
            <div className="field">
              <input type="number"  className="inp-normal" value={period} onChange={(e) => setPeriod(e.target.value)} />
              <div class="symbol"><h3>мес.</h3></div>
            </div>
            <input type="range" className="absolute" value={period} onChange={(e) => setPeriod(e.target.value)} id="period" name="period" min="1" max="60" />
          </div>
          </div>
        </div>
        <div className="result">
          <div className="result-item">
            <p className="sum-text" >Сумма договора лизинга</p>
            <h1 className="sum">{Math.round(feeValue + period * monthPay)}₽</h1>
          </div>
          <div className="result-item">
            <p className="payment-text" >Ежемесячный платеж от</p>
            <h1 className="payment">{monthPay}₽</h1>
          </div>
          <button type='submit' className="btn result-btn"><h3>Оставить заявку</h3></button>
        </div>
      </form>
    </div>
  );
}

export default App;
