import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="hero">
      <div>
        <p class="eyebrow">Trainer platform</p>
        <h1>Arsenal Fitness</h1>
        <p>Connect with your trainer, book sessions, manage schedules, and purchase training packages in one modern portal.</p>
        <div class="actions">
          <a routerLink="/client" class="button button-primary">Client portal</a>
          <a routerLink="/trainer" class="button button-secondary">Trainer dashboard</a>
        </div>
      </div>
      <div class="hero-card">
        <h2>Scheduling & sessions</h2>
        <p>View a live weekly schedule with client sessions and book training times from the client side.</p>
        <ul>
          <li>Fast client checkout</li>
          <li>Weekly schedule view</li>
          <li>Trainer-side session management</li>
        </ul>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        display: grid;
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.2em;
        color: #d63384;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      h1 {
        font-size: clamp(2.5rem, 4vw, 4.5rem);
        margin: 0 0 1rem;
      }

      p {
        max-width: 50rem;
        line-height: 1.8;
        color: #333;
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 2rem;
      }

      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.9rem 1.5rem;
        border-radius: 999px;
        text-decoration: none;
        font-weight: 700;
      }

      .button-primary {
        background: #1d4ed8;
        color: white;
      }

      .button-secondary {
        background: #f0f0f0;
        color: #1f2937;
      }

      .hero-card {
        border-radius: 1.25rem;
        padding: 2rem;
        background: rgba(29, 78, 216, 0.08);
        border: 1px solid rgba(29, 78, 216, 0.12);
      }

      .hero-card h2 {
        margin-top: 0;
      }

      .hero-card ul {
        margin: 1rem 0 0;
        padding-left: 1.25rem;
        list-style: disc;
      }

      @media (min-width: 900px) {
        .hero {
          grid-template-columns: 1.3fr 0.9fr;
          align-items: center;
        }
      }
    `,
  ],
})
export class HomeComponent {}
