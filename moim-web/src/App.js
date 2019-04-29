import React from 'react';
import  logo from './logo.png';
import './App.css';
import { Button } from "shards-react";
import { Form, FormInput, FormGroup } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Form>
            <FormGroup>
              <label htmlFor="#loanAmount">Loan Amount</label>
              <FormInput id="#loanAmountInput" placeholder="Loan Amount" />

            </FormGroup>
          </Form>
        </p>
        <p>
          <Button theme="info">Contact Friends</Button>
        </p>

      </header>
    </div>
  );
}

export default App;
