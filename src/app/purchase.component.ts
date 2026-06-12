import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { sessionPackages } from './data';

@Component({
  selector: 'purchase-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <section class="purchase-panel">
      <div>
        <p class="eyebrow">Purchase sessions</p>
        <h1>Choose a package</h1>
        <p>Select the best plan for your training goals and complete checkout details below.</p>
      </div>

      <form (ngSubmit)="submitOrder()" class="purchase-form">
        <div class="packages">
          <label *ngFor="let package of packages" class="package-option">
            <input type="radio" name="package" [(ngModel)]="selectedPackageId" [value]="package.id" />
            <div>
              <strong>{{ package.title }}</strong>
              <p>{{ package.description }}</p>
              <span>$ {{ package.price }}</span>
            </div>
          </label>
        </div>

        <label>
          Full name
          <input type="text" [(ngModel)]="name" name="name" required />
        </label>

        <label>
          Email
          <input type="email" [(ngModel)]="email" name="email" required />
        </label>

        <button type="submit" class="button button-primary">Checkout</button>
        <p *ngIf="message" class="message">{{ message }}</p>
      </form>
    </section>
  `,
  styles: [
    `
      .purchase-panel {
        display: grid;
        gap: 2rem;
      }

      .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.18em;
        color: #4338ca;
        font-weight: 700;
        margin-bottom: 0.75rem;
      }

      .purchase-form {
        display: grid;
        gap: 1.25rem;
        max-width: 42rem;
      }

      .packages {
        display: grid;
        gap: 1rem;
      }

      .package-option {
        display: grid;
        gap: 0.75rem;
        border: 1px solid #e5e7eb;
        border-radius: 1rem;
        padding: 1rem;
        background: white;
      }

      .package-option input {
        accent-color: #4338ca;
      }

      .package-option strong {
        display: block;
        font-size: 1.05rem;
      }

      .package-option span {
        color: #111827;
        font-weight: 700;
      }

      label {
        display: grid;
        gap: 0.6rem;
        font-weight: 600;
      }

      input[type='text'],
      input[type='email'] {
        width: 100%;
        border-radius: 0.85rem;
        border: 1px solid #d1d5db;
        padding: 0.95rem 1rem;
        font-size: 1rem;
      }

      .button-primary {
        width: fit-content;
        background: #4338ca;
        color: white;
        border: none;
        border-radius: 999px;
        padding: 0.95rem 1.5rem;
        cursor: pointer;
      }

      .message {
        color: #1d4ed8;
      }
    `,
  ],
})
export class PurchaseComponent {
  packages = sessionPackages;
  selectedPackageId = this.packages[0].id;
  name = '';
  email = '';
  message = '';

  submitOrder() {
    const selected = this.packages.find((item) => item.id === this.selectedPackageId);
    if (!selected) {
      this.message = 'Please select a package before checking out.';
      return;
    }

    this.message = `Order received for ${selected.title}. Confirmation sent to ${this.email}.`;
    this.name = '';
    this.email = '';
  }
}
