import * as _ from 'lodash';

export const handler = async (event) => {
    const max = 10;
    const val = _.random(max);



    const response = {
        statusCode: 200,
        body: JSON.stringify(`WATAP, priviet random val : ${val}`)
    }
    return response; 
};