import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Trip {
  start: string;
  end: string;
  level: number;
  continued: boolean;
  duplicate: boolean;
  arrow: boolean;
  color: string;
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
  startPoint = '';
  endPoint = '';

  colorPalette = ['#5e5ce6', '#f54291', '#00b894', '#ff9f43', '#ff6b6b'];
  colorIndex = 0;

  addTrip() {
    const start = this.startPoint.trim().slice(0, 3).toUpperCase();
    const end = this.endPoint.trim().slice(0, 3).toUpperCase();
    if (!start || !end) return;

    const last = this.trips[this.trips.length - 1];
    const isDuplicate = this.trips.some(t => t.start === start && t.end === end);

    const trip: Trip = {
      start,
      end,
      level: isDuplicate ? 2 : 1,
      continued: last ? last.end === start : false,
      duplicate: isDuplicate,
      arrow: last && last.end !== start,
      color: this.colorPalette[this.colorIndex]
    };

    this.trips.push(trip);
    this.colorIndex = (this.colorIndex + 1) % this.colorPalette.length;
    this.startPoint = '';
    this.endPoint = '';
  }
}

