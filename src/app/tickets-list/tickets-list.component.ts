import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';
import { BackendService } from '../backend.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AddTicketDialogComponent } from '../add-ticket-dialog/add-ticket-dialog.component';

@Component({
    selector: 'app-tickets-list',
    templateUrl: './tickets-list.component.html',
    styleUrls: ['./tickets-list.css']
})
export class TicketsListComponent {
    public readonly users$: Observable<User[]> = this.backendService.users();
    public readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();

    constructor(private readonly backendService: BackendService, private router: Router, private dialog: MatDialog) {}

    goToDetailsPage(id: number) {
        this.router.navigate(['tickets/details', id]);
    }

    openTicketAdd() {
        const dialogConfig = new MatDialogConfig();

        this.dialog.open(AddTicketDialogComponent, dialogConfig);
    }
}