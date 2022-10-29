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
const monthPay = (cost - feeValue) * ((interestRate * Math.pow((1 + interestRate), period)) / (Math.pow((1 + interestRate), period) - 1));

  return (
    <div className="App">
     <form onSubmit={(e)=>handleSubmit(e)}> 
      <h1>Рассчитайте стоимость автомобиля в лизинг</h1>   
      <div>  
      <label>Стоимость автомобиля
      <input type ="range" value={cost} onChange={(e) => setCost(e.target.value)} id="cost" name="cost" min="1000000" max="6000000"/>
      <output id="cost-value">{cost}₽</output>
      </label>
      </div>
      <div>
      <label>Первоначальный взнос
        <p>{feeValue}</p>
       <input type ="range" value={fee} onChange={(e) => setFee(e.target.value)} id="fee" name="fee" min="10" max="60"/>
      <output id="fee-value">{fee}%</output>
      </label>
      </div>
      <div>
      <label>Срок лизинга
      <input type ="range" value={period} onChange={(e) => setPeriod(e.target.value)} id="period" name="period" min="1" max="60"/>
      <output id="period-value">{period} мес.</output>
      </label>
      </div>
      <button type='submit' class="btn">Оставить заявку</button>
     </form>
     <div class="result">
      <div>
        <p class="sum-text" >Сумма договора лизинга</p>
        <h2 class="sum">{feeValue+period*monthPay}₽</h2>
      </div>
      <div>
        <p  class="payment-text" >Ежемесячный платеж от</p>
        <h2 class="payment">{monthPay}₽</h2>
      </div>
     </div>
    </div>
  );
}

export default App;
