import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ClientComponent } from './client.component';
import { TrainerComponent } from './trainer.component';
import { BookingComponent } from './booking.component';
import { PurchaseComponent } from './purchase.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'client', component: ClientComponent },
  { path: 'trainer', component: TrainerComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: '**', redirectTo: '' },
];
