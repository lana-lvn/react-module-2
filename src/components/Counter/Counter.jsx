import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {

  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  
  const handleClickPlus = () => { 
    // setCounter(counter + 1); 
      if (counter >= 100) {
        alert('STOP!');
        return;
    }
    setCounter((prevState) => prevState + step);
  

  };

   const handleClickMinus = () => { 
    setCounter((prevState) => prevState - step);
    
  };
  const handleReset = () => {
    setCounter(0);
    setStep(1);
  };
  

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input type='number' value={step} onChange={(e) => setStep(+e.target.value)} />
        <div className={s.flex}>
          <button onClick={handleClickMinus} className='btn'>minus</button>
          <button onClick={handleReset} className='btn'>reset</button>
          <button onClick={handleClickPlus} className='btn'>plus</button>
        </div>
      </div>
    </div>
  );
};
