import axios from 'axios';

import env from 'environment';

const { apiUrl, accessKey } = env;

/**
 * @returns array<[code, name]>
 */
export async function getCurrencies() {
    const url = `${apiUrl}/symbols?access_key=${accessKey}`;
    const response = await axios.get(url);
    return Object.entries(response.data.symbols);
}

/**
 * @param {string} from currency code (eg EUR)
 * @param {number} amount
 * @param {string} to currency code(eg USD)
 *
 * @returns {false} if api failed
 * @returns {number} on success
 */
export async function convert(from, amount, to) {
    // We need to upgrade our plan to get this endpoint :'(
    const url = `${apiUrl}/convert?access_key=${accessKey}&from=${from}&amount=${amount}&to=${to}`;
    const response = await axios.get(url);

    if (!response.data.success) {
        return false;
    }

    return response.data.result;
}

/**
 * @param {string} from currency code (eg EUR)
 * @param {string} to currency code(eg USD)
 *
 * @returns {false} if api failed
 * @returns {number} on success
 */
export async function getRate(from, to) {
    const url = `${apiUrl}/latest?access_key=${accessKey}&base=${from}&symbols=${to}`;
    const response = await axios.get(url);
    const { data } = response;
    if (!data.success) {
        return false;
    }

    return data.rates[to];
}
