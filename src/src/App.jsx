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
const getCost = (e) =>{
  if(Number(e.target.value)>6000000){
    return;
  }
  setCost(e.target.value);
}
const getFee = (e) =>{
  if( Number(e.target.value)>60){
    return;
  }
  setFee(e.target.value)
}
const getPeriod = (e) =>{
  // let {value} = e.target.value;
  if( Number(e.target.value)>60){
    return;
  }
  setPeriod(e.target.value);
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
            <div className="relative">
              <div className="field">
                <input type="number" className="inp-normal" value={cost} onChange={(e) => getCost(e)} />
                <div class="symbols"><h3>₽</h3></div>
              </div>
              <input type="range" className="absolute" value={cost} onChange={(e) => getCost(e)} id="cost" name="cost" min="1000000" max="6000000" />
            </div>
          </div>
          <div className="item">
            <p>Первоначальный взнос</p>
            <div className="relative">
            <div className="fee-input field ">
              <div className="fee-container">
                <h3>{feeValue}</h3>
                <div className="wrapper">
                  <input type="number" className="fee-field" value={fee} onChange={(e) => getFee(e)} name="fee" />
                  <span>%</span>
                </div>
              </div>
              </div>
              <input type="range" className="absolute" value={fee} onChange={(e) => getFee(e)} id="fee" name="fee" min="10" max="60" />
            </div>
          </div>
          <div className="item">
            <p>Срок лизинга</p>
            <div className="relative">
            <div className="field">
              <input type="number"  className="inp-normal" value={period} onChange={(e) => getPeriod(e)} />
              <div class="symbols"><h3>мес.</h3></div>
            </div>
            <input type="range" className="absolute" value={period} onChange={(e) => getPeriod(e)} id="period" name="period" min="1" max="60" />
          </div>
          </div>
        </div>
        <div className="result">
          <div className="result-item">
            <p className="result-text" >Сумма договора лизинга</p>
            <h1 className="sum">{Math.round(feeValue + period * monthPay)}₽</h1>
          </div>
          <div className="result-item">
            <p className="result-text" >Ежемесячный платеж от</p>
            <h1 className="sum">{monthPay}₽</h1>
          </div>
          <button type='submit' className="btn"><h3>Оставить заявку</h3></button>
        </div>
      </form>
    </div>
  );
}

export default App;
