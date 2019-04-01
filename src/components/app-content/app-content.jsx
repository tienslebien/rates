import React, { useState } from 'react';

import Loader from 'components/loader';
import Currencies from 'components/currencies';
import Input from 'components/input';
import useCurrencies from 'hooks/currencies';
import useConvert from 'hooks/convert';

import './app-content.scss';

export default function AppContent() {
    const currencies = useCurrencies();
    const [from, setFrom] = useState('EUR');
    const [amount, setAmount] = useState(0);
    const [to, setTo] = useState('USD');
    const result = useConvert(from, amount, to);

    if (!currencies) {
        return <Loader />;
    }

    return (
        <>
            <h1>Convertissez vos devises en temps réel !</h1>

            <form>
                <Currencies
                    currencies={currencies}
                    onSelect={setFrom}
                    value={from}
                />
                <Input type="number" value={amount} onChange={setAmount} />
                <Currencies
                    currencies={currencies}
                    onSelect={setTo}
                    value={to}
                />
            </form>

            {result === false && <h2>Taux de conversion inconnu</h2>}
            {result !== null && result !== false && (
                <h2>{`${amount} ${from} = ${result.toFixed(2)} ${to}`}</h2>
            )}
        </>
    );
}
