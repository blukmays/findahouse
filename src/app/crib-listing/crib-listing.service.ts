import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Crib} from '../crib';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class CribService {
private _url: string = 'data/cribs.json';

public newCribSubject = new Subject<any>();

    constructor(private http: HttpClient) {}

    getCrib(): Observable<Crib[]> {
        return this.http.get<Crib[]>(this._url);
    }
    addCrib(data) {
    data.image = 'default-image';
    this.newCribSubject.next(data);
    }
}
