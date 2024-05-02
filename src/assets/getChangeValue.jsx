import { useState, useEffect } from 'react';
import GetValue from './getValue';

function GetChangeValue() {
    const [exchangeRateUSD, setExchangeRateUSD] = useState(null);
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
                setExchangeRateUSD(data.conversion_rates.KG);
            } catch (error) {
                console.error(error);
            }
        }
        fetchExchangeRates();
    }, [baseCurrency]);

    return (
        <div>
            <p>Курс доллара к рублю: {Math.round(exchangeRateUSD)}</p>
        </div>
    );
}

export default GetChangeValue;

