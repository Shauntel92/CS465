import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class TripData {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders() {
  return {
    headers: {
      Authorization: `Bearer ${this.authService.getToken()}`
    }
  };
}

  getTrips(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/trips`, this.getAuthHeaders());
  }

  getTrip(tripCode: string): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/trips/${tripCode}`, this.getAuthHeaders());
  }

  addTrip(tripData: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/trips`, tripData, this.getAuthHeaders());
  }

  updateTrip(tripCode: string, tripData: any): Observable<any> {
    return this.http.put<any>(`${this.apiBaseUrl}/trips/${tripCode}`, tripData, this.getAuthHeaders());
  }

  deleteTrip(tripCode: string): Observable<any> {
    return this.http.delete<any>(`${this.apiBaseUrl}/trips/${tripCode}`, this.getAuthHeaders());
  }
}