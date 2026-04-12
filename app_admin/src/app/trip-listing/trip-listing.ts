import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCard } from '../trip-card/trip-card';
import { TripData } from '../services/trip-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard, RouterLink],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListing implements OnInit {
  trips: any[] = [];

  constructor(private tripDataService: TripData) {}

  ngOnInit(): void {
    this.tripDataService.getTrips().subscribe({
      next: (value) => {
        this.trips = value;
      },
      error: (err) => {
        console.error('Error loading trips', err);
      }
    });
  }
}