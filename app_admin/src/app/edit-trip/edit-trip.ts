import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})
export class EditTrip implements OnInit {
  editForm!: FormGroup;
  tripCode = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tripService: TripData
  ) {}

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      _id: [''],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.tripCode = this.route.snapshot.paramMap.get('tripCode') || '';

    this.tripService.getTrip(this.tripCode).subscribe({
      next: (trip: any) => {
        this.editForm.patchValue(trip);
      },
      error: (error: any) => {
        console.error('Error loading trip:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const formValue = {
        ...this.editForm.value,
        perPerson: Number(this.editForm.value.perPerson)
      };

      this.tripService.updateTrip(this.tripCode, formValue).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.error('Error updating trip:', error);
        }
      });
    }
  }
}