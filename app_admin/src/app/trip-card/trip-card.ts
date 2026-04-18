import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCard {
  @Input() trip: any;

  constructor(public authService: AuthService) {}

  getPerPersonValue(): number {
    const value = this.trip?.perPerson;

    if (typeof value === 'number') {
      return value;
    }

    if (typeof value === 'string') {
      const cleaned = value.replace('$', '').replace(',', '');
      const parsed = Number(cleaned);
      return isNaN(parsed) ? 0 : parsed;
    }

    return 0;
  }
}