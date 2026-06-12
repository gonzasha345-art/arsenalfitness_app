import { signal } from '@angular/core';

export interface Appointment {
  id: number;
  date: string;
  time: string;
  client: string;
  type: string;
  status: string;
}

export const appointmentList = signal<Appointment[]>([
  { id: 1, date: '2026-06-17', time: '08:00', client: 'Avery Lee', type: 'Strength Coaching', status: 'Confirmed' },
  { id: 2, date: '2026-06-18', time: '10:00', client: 'Jordan Park', type: 'Recovery Session', status: 'Confirmed' },
  { id: 3, date: '2026-06-19', time: '14:00', client: 'Mia Chen', type: 'Nutrition Guidance', status: 'Confirmed' },
]);

export const sessionPackages = [
  {
    id: 'single',
    title: 'Single Session',
    price: 55,
    description: 'One 45-minute one-on-one training session with a custom plan.',
  },
  {
    id: 'five-pack',
    title: '5-Session Pack',
    price: 260,
    description: 'Five sessions for consistent progress and momentum.',
  },
  {
    id: 'ten-pack',
    title: '10-Session Pack',
    price: 480,
    description: 'Best value for long-term coaching and accountability.',
  },
];
