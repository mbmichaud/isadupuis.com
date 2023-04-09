import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { CanvasViewModel } from '../models/models';
import { BaseService } from './base.service';

export class FilterParams {
    take?: number;
}

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

    public getCanvasListing(filterParams?: FilterParams): Observable<CanvasViewModel[]> {
        return this.http.post<CanvasViewModel[]>(`/api/content/get-canvas-listing`, filterParams)
            .pipe(
                catchError(this.handleError('getCanvasListing', []))
            );
    }

    public getEntity(identifier: string): Observable<CanvasViewModel | null> {
        return this.http.get<CanvasViewModel>(`/api/content/entity/${identifier}`)
            .pipe(
                catchError(this.handleError('getEntity', null))
            );
    }
}
