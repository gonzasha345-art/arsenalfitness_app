import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appointmentList } from './data';

@Component({
  selector: 'trainer-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="panel">
      <div class="top-row">
        <div>
          <p class="eyebrow">Trainer dashboard</p>
          <h1>Weekly schedule and session pipeline</h1>
          <p>Track client bookings, manage session status, and review appointments for the week ahead.</p>
        </div>
      </div>

      <div class="summary-grid">
        <article class="summary-card">
          <span>Total bookings</span>
          <strong>{{ totalAppointments() }}</strong>
        </article>
        <article class="summary-card">
          <span>Confirmed sessions</span>
          <strong>{{ confirmedAppointments() }}</strong>
        </article>
        <article class="summary-card">
          <span>Next session</span>
          <strong>{{ nextAppointment() }}</strong>
        </article>
      </div>

      <article class="card schedule-card">
        <h2>Weekly schedule</h2>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th *ngFor="let day of weekDays()">{{ day.label }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let slot of scheduleGrid()">
              <td>{{ slot.time }}</td>
              <td *ngFor="let cell of slot.cells">
                <ng-container *ngIf="cell; else empty">
                  <strong>{{ cell.client }}</strong>
                  <span>{{ cell.type }}</span>
                </ng-container>
                <ng-template #empty>
                  <span class="empty">Available</span>
                </ng-template>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  `,
  styles: [
    `
      .panel {
        display: grid;
        gap: 2rem;
      }

      .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.18em;
        color: #c2410c;
        font-weight: 700;
        margin-bottom: 0.75rem;
      }

      .summary-grid {
        display: grid;
        gap: 1rem;
      }

      .summary-card {
        background: white;
        border-radius: 1rem;
        padding: 1.5rem;
        box-shadow: 0 15px 40px rgba(15, 23, 42, 0.08);
      }

      .summary-card span {
        display: block;
        color: #6b7280;
        margin-bottom: 0.85rem;
      }

      .summary-card strong {
        font-size: 2rem;
      }

      .schedule-card {
        overflow-x: auto;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      th,
      td {
        border: 1px solid #e5e7eb;
        padding: 0.85rem;
        text-align: left;
        vertical-align: top;
      }

      th {
        background: #f9fafb;
      }

      td span {
        display: block;
        color: #475569;
      }

      .empty {
        color: #94a3b8;
        font-style: italic;
      }

      @media (min-width: 900px) {
        .summary-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }
    `,
  ],
})
export class TrainerComponent {
  appointments = appointmentList;

  times = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'];

  weekDays = computed(() => {
    const start = new Date();
    start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
    return Array.from({ length: 5 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      return {
        iso: date.toISOString().slice(0, 10),
        label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }),
      };
    });
  });

  scheduleGrid = computed(() => {
    return this.times.map((time) => ({
      time,
      cells: this.weekDays().map((day) =>
        this.appointments()
          .filter((appointment) => appointment.date === day.iso && appointment.time === time)
          .shift()
      ),
    }));
  });

  totalAppointments = computed(() => this.appointments().length);
  confirmedAppointments = computed(() => this.appointments().filter((appointment) => appointment.status === 'Confirmed').length);
  nextAppointment = computed(() => {
    const next = this.appointments()
      .slice()
      .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time))[0];
    return next ? `${next.client} · ${next.date} ${next.time}` : 'No upcoming sessions';
  });
}
