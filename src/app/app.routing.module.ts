import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'tickets', pathMatch: 'full'},
    { path: 'tickets', component: TicketsListComponent },
    { path: 'tickets/details/:id', component: TicketDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}