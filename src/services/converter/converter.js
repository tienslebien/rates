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
