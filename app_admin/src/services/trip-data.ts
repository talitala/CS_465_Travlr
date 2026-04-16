import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root',
})
export class TripData {
  private readonly apiUrl = 'http://localhost:3000/api/trips';
  private tripsSubject = new Subject<Trip[]>();
  public trips$ = this.tripsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl).pipe(
      tap((trips: Trip[]) => this.tripsSubject.next(trips))
    );
  }

  refreshTrips(): void {
    this.getTrips().subscribe({
      next: () => {},
      error: (error: any) => console.log('Error refreshing trips: ' + error)
    });
  }

  getTrip(tripCode: string): Observable<Trip> {
    const url = `${this.apiUrl}/${tripCode}`;
    return this.http.get<Trip>(url);
  }

  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiUrl, formData).pipe(
      tap(() => this.refreshTrips())
    );
  }

  updateTrip(formData: Trip, tripCode?: string): Observable<Trip> {
    const code = tripCode || formData.code;
    const url = `${this.apiUrl}/${code}`;
    return this.http.put<Trip>(url, formData).pipe(
      tap(() => this.refreshTrips())
    );
  }
}