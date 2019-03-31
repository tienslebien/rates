import { useEffect, useState } from 'react';

import { getCurrencies } from 'services/converter';

export default function useCurrencies() {
    const [currencies, setCurrencies] = useState(null);
    useEffect(() => {
        async function getCurrenciesFromApi() {
            setCurrencies(await getCurrencies());
        }
        getCurrenciesFromApi();
    }, []);

    return currencies;
}
