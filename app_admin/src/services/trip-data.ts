import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../app/storage';


@Injectable({
  providedIn: 'root',
})
export class TripData {
  private readonly apiUrl = 'http://localhost:3000/api/trips';
  private tripsSubject = new Subject<Trip[]>();
  public trips$ = this.tripsSubject.asObservable();
  baseUrl = 'http://localhost:3000/api';
  constructor(
  private http: HttpClient,
  @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

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

  login(user: User, passwd: string) : Observable<AuthResponse> {
// console.log('Inside TripDataService::login');
return this.handleAuthAPICall('login', user, passwd);
}
// Call to our /register endpoint, creates user and returns JWT
register(user: User, passwd: string) : Observable<AuthResponse> {
// console.log('Inside TripDataService::register');
return this.handleAuthAPICall('register', user, passwd);
}
// helper method to process both login and register methods
handleAuthAPICall(endpoint: string, user: User, passwd: string) :
Observable<AuthResponse> {
// console.log('Inside TripDataService::handleAuthAPICall');
let formData = {
name: user.name,
email: user.email,
password: passwd
};
return this.http.post<AuthResponse>(this.baseUrl + '/' + endpoint,
formData);
}
}