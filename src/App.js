import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

const App = () => {
  const [buffer, setBuffer] = useState(''); // Buffer to store the input
  const [result, setResult] = useState(0); // Result of the calculation

  // Function to handle button click
  const handleClick = (value) => {
    setBuffer(buffer + value);
  };

  // Function to evaluate the buffer and calculate the result
  const calculateResult = () => {
    try {
      const evalResult = eval(buffer);
      setBuffer(evalResult);
    } catch (error) {
      setBuffer('Error');
    }
  };

  // Function to clear the buffer and result
  const clearBuffer = () => {
    setBuffer('');
    setResult(0);
  };

  return (
    <div className="calculator">
      <input type="text" value={buffer} readOnly />
      <div className="buttons">
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="+" onClick={handleClick} className="operator"/>
        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="-" onClick={handleClick} className="operator"/>
        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button value="*" onClick={handleClick} className="operator"/>
        <Button value="C" onClick={clearBuffer} />
        <Button value="0" onClick={handleClick} />
        <Button value="=" onClick={calculateResult} />
        <Button value="/" onClick={handleClick} className="operator"/>
      </div>
      
    </div>
  );
};

export default App;
