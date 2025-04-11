import { Component } from '@angular/core';
import { TripVisualizerComponent } from './trip-visualizer/trip-visualizer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TripVisualizerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trip-visualizer-app';
}

