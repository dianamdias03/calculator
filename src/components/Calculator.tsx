import React, {useState, useEffect, useRef} from "react";
import '../App.css'
import { operation, operationUnicNumber } from "../service/calculator";

const Calculator = () => {

    const [operator, setOperator] = useState<string>('');
    const [num1, setNum1] = useState<string>('');
    const [num2, setNum2] = useState<string>('');  
    const [number, setNumber] = useState<string>('');

    const initialRef: any = null;
    const inputValue = useRef(initialRef);

    useEffect(() => {
        setNum1(number);
        setNumber('');
        if(operator === 'squareRoot'){
            setNumber(operationUnicNumber(Number(number), operator).toString())
        }
    },[operator])

    const handleChangeEqual = () => {
        setNum2(number); 
        setNumber(operation(Number(num1), Number(number), operator));
    }

    const insert = (value: string) => {
        setNumber(number + value);
    }

    const clear = () => {
        setNumber('');
        setNum1('');
        setNum2('');
        setOperator('');
        console.log(operator, num1, num2)
    }

    const onKeyPress = (event: any) => {
        if(event.key == '/' || event.key == '*' || event.key == '-' || event.key == '+'){
            setOperator(event.key)
        }

        if(event.key == 'Enter'){
            handleChangeEqual();
        }
    }

    const onChangeInput = (value: any) => {
        if(!isNaN(value.target.value)){
            setNumber(value.target.value);
        }
        
    }

    console.log(operator, num1, num2)

    return(
        <>
            <div className="calculator">
                <div className="divCalculator">
                    <input ref={inputValue} autoFocus type="text" className="inputValue" value={number} onChange={onChangeInput} onKeyPress={onKeyPress} name="value"/>
                    <table>
                        <tbody>
                            <tr>
                                <td><button type="button" onClick={() => {setOperator('percentage')}}>%</button></td>
                                <td><button type="button" onClick={clear}>CE</button></td>
                                <td><button type="button" onClick={clear}>C</button></td>
                                <td><button type="button" onClick={() => {setNumber(number.substring(0, number.length - 1))}}>del</button></td>
                            </tr>
                            <tr>
                                <td><button type="button">1/x</button></td>
                                <td><button type="button">x²</button></td>
                                <td><button type="button" onClick={() => {setOperator('squareRoot')}}>√x</button></td>
                                <td><button type="button" onClick={() => {setOperator('/')}}>/</button></td>
                            </tr>
                            <tr>
                                <td><button type="button" onClick={() => insert('7')}>7</button></td>
                                <td><button type="button" onClick={() => insert('8')}>8</button></td>
                                <td><button type="button" onClick={() => insert('9')}>9</button></td>
                                <td><button type="button" onClick={() => {setOperator('x')}}>x</button></td>
                            </tr>
                            <tr>
                                <td><button type="button" onClick={() => insert('4')}>4</button></td>
                                <td><button type="button" onClick={() => insert('5')}>5</button></td>
                                <td><button type="button" onClick={() => insert('6')}>6</button></td>
                                <td><button type="button" onClick={() => {setOperator('-')}}>-</button></td>
                            </tr>
                            <tr>
                                <td><button type="button" onClick={() => insert('1')}>1</button></td>
                                <td><button type="button" onClick={() => insert('2')}>2</button></td>
                                <td><button type="button" onClick={() => insert('3')}>3</button></td>
                                <td><button type="button" onClick={() => {setOperator('+')}}>+</button></td>
                            </tr>
                            <tr>
                                <td><button type="button">+/-</button></td>
                                <td><button type="button" onClick={() => insert('0')}>0</button></td>
                                <td><button type="button" onClick={() => insert('.')}>.</button></td>
                                <td><button type="button" onClick={handleChangeEqual}>=</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Calculator;