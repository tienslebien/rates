import React from 'react';

import './input.scss';

export default function Input({ type, value, onChange }) {
    const doChange = ev => onChange(ev.target.value);

    return (
        <input
            type={type}
            value={value}
            onChange={doChange}
            className="Input"
        />
    );
}
