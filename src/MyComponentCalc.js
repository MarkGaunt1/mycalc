import React, {useState} from 'react';
import {Images, Container, Row, Col} from 'react-bootstrap';
import image from './maths.jpg';
import './MyComponentCalc.css';

const styles = {
  width: '100%',
  
  margin: '0',
  backgroundImage: 'url('+image+')',
  backgroundSize: 'cover'
    
  };


export function MyComponentCalc() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(number1 + number2);

    function Caluculate() {
        setTotal(number1 + number2);
    }

    return (<div><Container fluid >
        <Row style={styles}>
        <Col>
        <header className="MyComponentCalc-header">
        <h1>Mark's Adding Machine!</h1>
        </header>

      <div className="number-inputs">
        <input
          type="number"
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
          placeholder="0"
        />
        <input
          type="number"
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
          placeholder="0"
        />
      </div>

      <button onClick={Caluculate}>And it equals...</button>

      <h2 className="MyComponentCalc-tot">{total}</h2>
        </Col>
        </Row>
      </Container></div>)
}