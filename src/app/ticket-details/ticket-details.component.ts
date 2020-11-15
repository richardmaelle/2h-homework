import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';
import { BackendService } from '../backend.service';

@Component({
    selector: 'ticket-details',
    templateUrl: './ticket-details.component.html',
    styleUrls: ['./ticket-details.css']
})
export class TicketDetailsComponent {
    id: number;
    ticket$:  Observable<Ticket>;
    user$: Observable<User>

    constructor(private route: ActivatedRoute, private backendService: BackendService) {
        this.route.params.subscribe( params => {
            this.ticket$ = this.backendService.ticket(params.id);
        });
    }

    getNameUserAssigned(idUser: number): string {
        let userName: string;
        this.backendService.user(idUser).subscribe(
            user => userName = user.name,
            () => userName = 'Utilisateur non trouvé'
        );
        return userName;
    }

    completeTicket(id: number) {
        this.backendService.complete(id, true).subscribe();
    }
}
