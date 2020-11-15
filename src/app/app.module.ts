import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BackendService } from './backend.service';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AddTicketDialogComponent } from './add-ticket-dialog/add-ticket-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [AppComponent, TicketsListComponent, TicketDetailsComponent, AddTicketDialogComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule
    ],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {}
