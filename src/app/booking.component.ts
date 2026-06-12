import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appointmentList } from './data';

@Component({
  selector: 'booking-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <section class="booking-panel">
      <div>
        <p class="eyebrow">Book a session</p>
        <h1>Create a new appointment</h1>
        <p>Pick a date and time, then confirm your session details. Your trainer will see the update immediately.</p>
      </div>

      <form (ngSubmit)="createBooking()" class="booking-form">
        <label>
          Name
          <input type="text" [(ngModel)]="clientName" name="clientName" required />
        </label>

        <label>
          Session type
          <select [(ngModel)]="sessionType" name="sessionType">
            <option>Strength Coaching</option>
            <option>Recovery Session</option>
            <option>Nutrition Guidance</option>
          </select>
        </label>

        <label>
          Date
          <input type="date" [(ngModel)]="date" name="date" required />
        </label>

        <label>
          Time
          <select [(ngModel)]="time" name="time">
            <option *ngFor="let value of availableTimes" [value]="value">{{ value }}</option>
          </select>
        </label>

        <button type="submit" class="button button-primary">Confirm booking</button>

        <p *ngIf="message" class="message">{{ message }}</p>
      </form>
    </section>
  `,
  styles: [
    `
      .booking-panel {
        display: grid;
        gap: 2rem;
      }

      .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.18em;
        color: #0f766e;
        font-weight: 700;
        margin-bottom: 0.75rem;
      }

      .booking-form {
        display: grid;
        gap: 1.25rem;
        max-width: 38rem;
      }

      label {
        display: grid;
        gap: 0.6rem;
        font-weight: 600;
      }

      input,
      select {
        width: 100%;
        border-radius: 0.85rem;
        border: 1px solid #d1d5db;
        padding: 0.95rem 1rem;
        font-size: 1rem;
      }

      .button-primary {
        width: fit-content;
        background: #0f766e;
        color: white;
        border: none;
        border-radius: 999px;
        padding: 0.95rem 1.5rem;
        cursor: pointer;
      }

      .message {
        margin-top: 0.5rem;
        color: #065f46;
      }
    `,
  ],
})
export class BookingComponent {
  clientName = '';
  sessionType = 'Strength Coaching';
  date = new Date().toISOString().slice(0, 10);
  time = '08:00';
  message = '';
  availableTimes = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'];

  createBooking() {
    const appointment = {
      id: Math.max(0, ...appointmentList().map((item) => item.id)) + 1,
      client: this.clientName || 'Guest User',
      type: this.sessionType,
      date: this.date,
      time: this.time,
      status: 'Confirmed',
    };

    appointmentList.update((current) => [...current, appointment]);
    this.message = `Booked ${appointment.type} for ${appointment.client} on ${appointment.date} at ${appointment.time}.`;
    this.clientName = '';
  }
}
