import React from "react";

export default function CurrencyOptions(props) {
  const {currencyRates, value, valute, onChange} = props;
  return (
  <>
    <input className="converter__value"
      type="text" 
      placeholder="1000" 
      value={value} 
      onChange={(evt)=> onChange((evt.target.value)? evt.target.value : 0, null)} 
    />
    <select className="converter__list"
      onChange={(evt) => onChange(null, evt.target.value)} 
      value={valute}
    >
      {currencyRates.map(option => (
        <option className="converter__item" key={option}>{option}</option>
      ))}
    </select>
  </>
  );
}