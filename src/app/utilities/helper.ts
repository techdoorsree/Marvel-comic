import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import { Md5 } from 'ts-md5/dist/md5';
@Injectable()
export class Helper {

    private marvelPublicKey;
    ts = '20170902';
    public privateKey = "eea3b4444a299402c0bd01add450c150e59c03f4"
    constructor() {
        this.marvelPublicKey = environment.marvelPublicKey;
    }

    public api($url) {
        let hash = Md5.hashStr(this.ts + this.privateKey + this.marvelPublicKey);
        
        return $url + `?apikey=${this.marvelPublicKey}&ts=${this.ts}&hash=${hash}` ;
    }

}
