import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './views/Home';
import About from './views/About';

const App = () => {

  // const [input1 , setInput1] = useState(0);
  // const [input2 , setInput2] = useState(0);
  // const [total, setTotal] = useState(0);

  // const setNum1 = (e) => {
  //   setInput1(Number(e.target.value));
  //   setTotal(Number(e.target.value) + Number(input2));
  // }

  // const setNum2 = (e) => {
  //   setInput2(Number(e.target.value));
  //   setTotal(Number(e.target.value) + Number(input1));
  // }

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
      {/* <h1>Add Two Numbers</h1>
      <div className="board">
        <h4>Num1: {input1}</h4>
        <h4>Num2: {input2}</h4>
        <h4>{input1} + {input2} = {total}</h4>
      </div>
      <div className="input__area">
        <input onKeyUp={e => setNum1(e)} type="number" placeholder="Enter first number"/>
        <input onChange={e => setNum2(e)} type="number" placeholder="Enter the second number" />
      </div> */}
    </div>
  )
}

export default App;
