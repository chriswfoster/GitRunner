import * as _ from 'lodash';
import {APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler} from 'aws-lambda';

export const hander = async (event, ) => {
    const max = 10;
    const val = _.random(max);



    const response = {
        statusCode: 200,
        body: JSON.stringify(`WATAP, spessibo random val : ${val}`)
    }
    return response; 
};