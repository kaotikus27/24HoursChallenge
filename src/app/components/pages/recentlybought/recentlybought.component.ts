import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recentlybought',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  templateUrl: './recentlybought.component.html',
  styleUrl: './recentlybought.component.scss'
})
export class RecentlyboughtComponent {
  
}
