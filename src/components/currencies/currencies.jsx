import React from 'react';

import './currencies.scss';

export default function Currencies({ currencies, onSelect, value }) {
    const doChange = ev => onSelect(ev.target.value);

    return (
        <select onChange={doChange} value={value} className="Currencies">
            {currencies.map(([currencyCode, currencyName]) => (
                <option
                    value={currencyCode}
                    key={currencyCode}
                    title={currencyName}
                >
                    {currencyCode}
                </option>
            ))}
        </select>
    );
}
