import { useEffect, useState } from 'react';

import { getRate } from 'services/converter';

export default function useConvert(from, amount, to) {
    const [rate, setRate] = useState(null);
    useEffect(() => {
        async function convertFromApi() {
            setRate(null);
            return setRate(await getRate(from, to));
        }
        convertFromApi();
    }, [from, to]);

    // 0 * rate = 0
    if (amount === 0) {
        return 0;
    }

    // n€ = n€
    if (from === to) {
        return parseFloat(amount);
    }

    return rate ? rate * amount : rate;
}
