import http from './http.js';
 
 
export const sendTransaction = (data) => http({
        method: 'POST', 
        url: '/submit_pfb',
        data
})