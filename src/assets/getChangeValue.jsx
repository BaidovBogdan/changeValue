import { useState, useEffect } from 'react';

function GetChangeValue() {
    const [exchangeRateUSD, setExchangeRateUSD] = useState(null);
    const [semiValue , setSemiValue] = useState(0);
    const [Value , setValue] = useState(0);

    const baseCurrency = 'USD'; 

    useEffect(() => {
        async function fetchExchangeRates() {
            const apiKey = '96470b4a535d49f1ebe49148';
            const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;
        
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch exchange rates');
                }
                const data = await response.json();
                setExchangeRateUSD(data.conversion_rates.KGS);
            } catch (error) {
                console.error(error);
            }
        }
        fetchExchangeRates();
    }, [baseCurrency]);

    const getValueFromInp = (click) => {
        if (click.key === "Enter") {
            setExchangeRateUSD( exchangeRateUSD * semiValue);
        }
    }

    console.log(+semiValue);
    return (
        <div>
            <input type='text'
            placeholder='сколько?' 
            onChange={e => setSemiValue(e.target.value)} 
            onKeyDown={getValueFromInp}/>
            <p>Курс доллара к рублю: {Math.round(exchangeRateUSD)}</p>
        </div>
    );
}

export default GetChangeValue;

