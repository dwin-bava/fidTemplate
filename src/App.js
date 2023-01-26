import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoanQuotation from "./loan_quotation/loanQuot";
import { object } from "./loan_quotation/loanQuot"


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    // <div className="root">
      
      <LoanQuotation handleClose={handleClose}/>
        
      
    // </div>
  );
}

export default App;


