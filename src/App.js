import { useState } from "react";
import './index.css';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {

  // const [step, setStep] = useState(1)
  // const [isOpen, setIsOpen] = useState(true)


  // function handlePrevious() {
  //   if(step > 1) setStep((s) => s - 1);
  // }

  // function handleNext() {
  //   if(step < 3) setStep(s => s + 1);
  // }

  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  function handlePrev() {
    (step <= 1) ? setStep(1) : setStep(step - 1)
  }

  function handleNext() {
    setStep(step + 1)
  }

  function countPrev() {
    (step === 0) ? setCount(count - 1) : setCount(count - step)
  }

  function countNext() {
    setCount(count + step)
  }

  const getDate = new Date()
  getDate.setDate(getDate.getDate() + count);

  const day = daysOfWeek[getDate.getDay()]; // Convert day to string
  const month = months[getDate.getMonth()]; // Convert month to string
  const date = getDate.getDate();
  const year = getDate.getFullYear();

  
  return(
    <>

      <div className="App">
        <div className="upperBox">
          <button onClick={handlePrev}>-</button>
          <h2>Step: {step}</h2>
          <button onClick={handleNext}>+</button>
        </div>

        <div className="lowerBox">
          <button onClick={countPrev}>-</button>
          <h2>Count: {count}</h2>
          <button onClick={countNext}>+</button>
        </div>

        <div className="displayBox">
          <p>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is` : `${count} days ago was `} {day} {month} {date}, {year}</p>
        </div>
      </div>

      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>

      { isOpen && (
        <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        
        <p className="message">Step {step}: {messages[step -1]}</p>
  
        <div className="buttons">
          <button style={{backgroundColor: '#7950f2', color: '#fff'}} onClick={handlePrevious}>Previous</button>
          <button style={{backgroundColor: '#7950f2', color: '#fff'}} onClick={handleNext}>Next</button>
        </div>
      </div>)
      } */}
    </>
  )
}
