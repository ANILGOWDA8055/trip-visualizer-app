import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Trip {
  start: string;
  end: string;
}

@Component({
  selector: 'app-trip-visualizer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-visualizer.component.html',
  styleUrls: ['./trip-visualizer.component.scss']
})
export class TripVisualizerComponent {
  trips: Trip[] = [];
  newTrip: Trip = { start: '', end: '' };

  addTrip() {
    if (this.newTrip.start && this.newTrip.end) {
      this.trips.push({ ...this.newTrip });
      this.newTrip = { start: '', end: '' };
    }
  }

  getLevel(index: number): number {
    const trip = this.trips[index];
    const prevTrip = this.trips[index - 1];

    if (!prevTrip) return 1;

    if (
      trip.start.toLowerCase() === prevTrip.end.toLowerCase()
    ) {
      return 1; // Continued trip
    }

    if (
      trip.start.toLowerCase() === prevTrip.start.toLowerCase() &&
      trip.end.toLowerCase() === prevTrip.end.toLowerCase()
    ) {
      return 2; // Same trip again
    }

    return 1; // Disconnected trip
  }

  isArrow(index: number): boolean {
    const trip = this.trips[index];
    const prevTrip = this.trips[index - 1];

    if (!prevTrip) return false;

    return trip.start.toLowerCase() !== prevTrip.end.toLowerCase();
  }
}
