import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService extends BaseService {

    constructor(
        private http: HttpClient,
    ) {
        super();
    }

    public getNavigation(): Observable<any> {
        return this.http.post<any>('/api/content/navigation', {})
            .pipe(
                catchError(this.handleError('getNavigation', null))
            );
    }
}
