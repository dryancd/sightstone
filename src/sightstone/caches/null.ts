/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
    The NullCache object is essentially a non-cache in that it
    doesn't store anything related to rate-limits, etc.
    It can be used just like a regular cache, but will probably
    raise errors when it is actually needed for operations.
*/

import Bluebird from 'bluebird';
import Cache from './cache';

class NullCache extends Cache {
    constructor() {
        super({ prefix: '', intervals: [] });
    }

    public async get(key: string): Bluebird<string> {
        return '';
    }

    public async set(key: string, value: string | object): Bluebird<void> {}

    public async incr(key: string): Bluebird<void> {}

    public async expire(key: string, ttl: number): Bluebird<void> {}

    public async flush(): Promise<void> {}
}

export default NullCache;
