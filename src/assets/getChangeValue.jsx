import axios from 'axios';
import { useState, useEffect } from 'react';

function GetChangeValue() {
    const [exchangeRate, setExchangeRate] = useState(null);
    const [firstValue , setFirstValue] = useState("");
    const [secondValue , setSecondValue] = useState("");
    const [userValueNums , setUserValueNums] = useState("");
    const [result , setResult] = useState(null);

    useEffect(() => {
        async function axiosExchangeRates() {
            const apiKey = '96470b4a535d49f1ebe49148';
            const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${firstValue}`;
        
            try {
                const response = await axios.get(apiUrl);
                const data = response.data;
                setExchangeRate(data.conversion_rates[secondValue]);
            } catch (error) {
                console.error(error);
            }
        }
        axiosExchangeRates();
    }, [firstValue , secondValue ,userValueNums]);

    const getValueFromInp = (event) => {
        if (event.key === "Enter") {
            
        }
    }

    useEffect(() => {
        setResult(exchangeRate * userValueNums);
    }, [exchangeRate, userValueNums]);

    return (
        <div>
            <input 
            type='text'
            placeholder='сколько у вас?' 
            value={userValueNums}
            onChange={e => setUserValueNums(e.target.value)} 
            />
            <input 
            type='text'
            placeholder='какая у вас валюта?'
            value={firstValue}
            onChange={e => setFirstValue(e.target.value)} 
            />
            <input
            onKeyDown={getValueFromInp} 
            type='text'
            placeholder='в какую перевести?'
            value={secondValue}
            onChange={e => setSecondValue(e.target.value)} 
            />
            <p>Курс {firstValue} к {secondValue}: {Math.round(result)}</p>
        </div>
    );
}

export default GetChangeValue;
