import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appointmentList, sessionPackages } from './data';

@Component({
  selector: 'client-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <section class="panel">
      <div class="top-row">
        <div>
          <p class="eyebrow">Client portal</p>
          <h1>Book sessions and purchase packages</h1>
          <p>Choose your plan, book a time slot, and keep your training on track with a calendar-based client experience.</p>
        </div>
        <div class="panel-actions">
          <a routerLink="/booking" class="button button-primary">Book an appointment</a>
          <a routerLink="/purchase" class="button button-secondary">Purchase sessions</a>
        </div>
      </div>

      <div class="section-grid">
        <article class="card">
          <h2>Available packages</h2>
          <div class="packages">
            <article *ngFor="let package of packages" class="package-card">
              <h3>{{ package.title }}</h3>
              <p>{{ package.description }}</p>
              <strong>$ {{ package.price }}</strong>
            </article>
          </div>
        </article>

        <article class="card">
          <h2>Upcoming sessions</h2>
          <ng-container *ngIf="appointments().length; else empty">
            <ul class="session-list">
              <li *ngFor="let appointment of appointments()">
                <strong>{{ appointment.client }}</strong>
                <span>{{ appointment.date }} · {{ appointment.time }}</span>
                <small>{{ appointment.type }} — {{ appointment.status }}</small>
              </li>
            </ul>
          </ng-container>
          <ng-template #empty>
            <p>No appointments scheduled yet. Use the booking page to reserve time with your trainer.</p>
          </ng-template>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
      .panel {
        display: grid;
        gap: 2rem;
      }

      .top-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;
      }

      .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.18em;
        color: #9333ea;
        font-weight: 700;
        margin-bottom: 0.75rem;
      }

      .panel-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
      }

      .button {
        padding: 0.85rem 1.4rem;
        border-radius: 999px;
        text-decoration: none;
        font-weight: 700;
        transition: transform 0.2s ease;
      }

      .button:hover {
        transform: translateY(-1px);
      }

      .button-primary {
        background: #2563eb;
        color: white;
      }

      .button-secondary {
        background: #f3f4f6;
        color: #111827;
      }

      .section-grid {
        display: grid;
        gap: 1.5rem;
      }

      .card {
        background: white;
        border-radius: 1rem;
        padding: 1.75rem;
        box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
      }

      .packages {
        display: grid;
        gap: 1rem;
      }

      .package-card {
        border: 1px solid #e5e7eb;
        border-radius: 1rem;
        padding: 1rem;
      }

      .package-card h3 {
        margin: 0 0 0.5rem;
      }

      .session-list {
        display: grid;
        gap: 0.75rem;
        padding: 0;
        list-style: none;
        margin: 0;
      }

      .session-list li {
        display: grid;
        gap: 0.35rem;
        padding: 1rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.9rem;
      }

      .session-list span,
      .session-list small {
        color: #6b7280;
      }

      @media (min-width: 900px) {
        .section-grid {
          grid-template-columns: 1.3fr 0.9fr;
        }
      }
    `,
  ],
})
export class ClientComponent {
  packages = sessionPackages;
  appointments = appointmentList;
}
