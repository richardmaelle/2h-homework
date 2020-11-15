import { importType } from '@angular/compiler/src/output/output_ast';
import { IterableDiffers } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AddTicketDialogComponent } from '../add-ticket-dialog/add-ticket-dialog.component';
import { BackendService } from '../backend.service';
import { TicketsListComponent } from "./tickets-list.component"

describe('TicketsListComponent', () => {
    let fixture: ComponentFixture<TicketsListComponent>;
    let component: TicketsListComponent;
    const mockMatDialog = {
        open: (component: any, config: MatDialogConfig) => {}
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TicketsListComponent,
                AddTicketDialogComponent
            ],
            imports: [
                RouterTestingModule
            ],
            providers: [
                BackendService,
                { provide: MatDialog, useValue: mockMatDialog }
            ]
        });

        fixture = TestBed.createComponent(TicketsListComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should open dialog on add ticket button click', () => {
        const openDialogSpy = spyOn(TestBed.inject(MatDialog), 'open');

        fixture.detectChanges();
        const addTicketButton = fixture.debugElement.query(By.css('#add-button'));
        addTicketButton.triggerEventHandler('click', null);

        expect(openDialogSpy).toHaveBeenCalled();
    });

    it('should navigate to detail page on goToDetailsPage method call', () => {
        const navigateSpy = spyOn(TestBed.inject(Router), 'navigate');
        const detailsPageUrl = 'tickets/details';
        const id = 1;

        component.goToDetailsPage(id);

        expect(navigateSpy).toHaveBeenCalledWith([detailsPageUrl, id]);
    })
})