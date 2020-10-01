import axios from 'axios'

const baseUrlApi = 'https://5f7533ce1cf3c900161cdd9e.mockapi.io/';

export const getAmiibos = _ => {
    const path = 'product';
    return axios({
        method: 'get',
        url: baseUrlApi + path,
    });
}
