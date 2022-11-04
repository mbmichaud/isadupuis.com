import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { CanvasViewModel } from '../models/models';
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
        return this.http.get<any>('/api/content/navigation')
            .pipe(
                catchError(this.handleError('getNavigation', null))
            );
    }

    public getEntities(identifier: string): Observable<CanvasViewModel[]> {
        return this.http.get<CanvasViewModel[]>(`/api/content/entities/${identifier}`)
            .pipe(
                catchError(this.handleError('getEntities', []))
            );
    }

    public getEntity(identifier: string): Observable<CanvasViewModel | null> {
        return this.http.get<CanvasViewModel>(`/api/content/entity/${identifier}`)
            .pipe(
                catchError(this.handleError('getEntity', null))
            );
    }
}
