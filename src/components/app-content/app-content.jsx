import React, { useState } from 'react';

import Loader from 'components/loader';
import Currencies from 'components/currencies';
import Input from 'components/input';
import useCurrencies from 'hooks/currencies';

import './app-content.scss';

export default function AppContent() {
    const currencies = useCurrencies();
    const [from, setFrom] = useState('EUR');
    const [amount, setAmount] = useState(0);
    const [to, setTo] = useState('USD');

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
        </>
    );
}
