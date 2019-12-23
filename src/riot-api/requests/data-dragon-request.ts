/*
    The DataDragonRequest object is a class that contains the information for a single
    request to the Riot API server. It contains a method that can be called to return
    information relevant to that request.
*/
import rp from 'request-promise';
import Bluebird from 'bluebird';
import Request from './request';

class DataDragonRequest extends Request {
    public get(): Bluebird<object> {
        const options = {
            url: this.targetURL,
            json: true,
        };

        return rp(options).promise();
    }
}

export default DataDragonRequest;