import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Crib} from '../crib';
import { Observable } from 'rxjs';

@Injectable()
export class CribService {
    
private _url: string ="data/cribs.json";

    constructor(private http: HttpClient){ }

    getCrib(): Observable<Crib[]> {
        return this.http.get<Crib[]>(this._url);
    }
}